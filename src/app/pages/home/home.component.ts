import { Component, OnDestroy, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipes } from '../../../assets/recipes';
import { TagsComponent } from '../../components/tags.component';
import { UpperCasePipe, CommonModule, TitleCasePipe } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Subject, takeUntil } from 'rxjs';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, UpperCasePipe, TagsComponent, CommonModule, TitleCasePipe],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  recipes: any[] = [];
  filteredRecipes: any[] = [];
  recipeViews: any = [];
  selectedCategories: Set<string> = new Set();
  selectedTags: Set<string> = new Set();
  availableCategories: string[] = [];
  searchTerm: string = '';

  private fuse!: Fuse<any>;
  private destroy$ = new Subject<void>();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.recipes = Recipes;
    this.filteredRecipes = [...this.recipes];
    this.extractCategories();
    this.initializeFuse();
    console.log(this.recipes);

    this.apiService
      .getRecipeViews()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.recipeViews = data;
          console.log('recipe views 👀', this.recipeViews);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  ngAfterViewInit() {
    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }

  initializeFuse(): void {
    const fuseOptions = {
      keys: ['name'],
      threshold: 0.3,
      includeScore: true,
    };
    this.fuse = new Fuse(this.recipes, fuseOptions);
  }

  onRecipeClick(recipeName: string) {
    this.apiService.addRecipeView(recipeName).subscribe({
      next: () => console.log('Recipe view added'),
      error: (error) => console.error('Error adding recipe view', error),
    });
  }

  extractCategories(): void {
    const categories = new Set<string>();
    this.recipes.forEach((recipe) => {
      if (recipe.category) {
        if (Array.isArray(recipe.category)) {
          recipe.category.forEach((cat: string) => categories.add(cat));
        } else {
          categories.add(recipe.category);
        }
      }
    });
    this.availableCategories = Array.from(categories).sort();
  }

  toggleCategory(category: string): void {
    if (this.selectedCategories.has(category)) {
      this.selectedCategories.delete(category);
    } else {
      this.selectedCategories.add(category);
    }
    this.filterRecipes();
  }

  filterRecipes(): void {
    let recipesToFilter = this.recipes;

    if (this.searchTerm.trim()) {
      const fuseResults = this.fuse.search(this.searchTerm);
      recipesToFilter = fuseResults.map((result) => result.item);
    }

    this.filteredRecipes = recipesToFilter.filter((recipe) => {
      let categoryMatch = this.selectedCategories.size === 0;

      if (!categoryMatch && recipe.category) {
        if (Array.isArray(recipe.category)) {
          categoryMatch = recipe.category.some((cat: string) => this.selectedCategories.has(cat));
        } else {
          categoryMatch = this.selectedCategories.has(recipe.category);
        }
      }

      // Tag filtering
      const tagMatch = this.selectedTags.size === 0 || Array.from(this.selectedTags).some((tag) => recipe.tags[tag]);

      return categoryMatch && tagMatch;
    });
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.filterRecipes();
  }

  isCategorySelected(category: string): boolean {
    return this.selectedCategories.has(category);
  }

  toggleTag(tag: string): void {
    if (this.selectedTags.has(tag)) {
      this.selectedTags.delete(tag);
    } else {
      this.selectedTags.add(tag);
    }
    this.filterRecipes();
  }

  isTagSelected(tag: string): boolean {
    return this.selectedTags.has(tag);
  }

  hasAnyTagSelected(): boolean {
    return this.selectedTags.size > 0;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

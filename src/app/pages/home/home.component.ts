import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipes } from '../../../assets/recipes';
import { TagsComponent } from '../../components/tags.component';
import { UpperCasePipe, CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, UpperCasePipe, TagsComponent, CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  recipes: any[] = [];
  filteredRecipes: any[] = [];
  recipeViews: any = [];
  selectedCategories: Set<string> = new Set();
  selectedTags: Set<string> = new Set();
  availableCategories: string[] = [];

  private destroy$ = new Subject<void>();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.recipes = Recipes;
    this.filteredRecipes = [...this.recipes];
    this.extractCategories();
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
        categories.add(recipe.category);
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
    this.filteredRecipes = this.recipes.filter((recipe) => {
      // Category filtering
      const categoryMatch =
        this.selectedCategories.size === 0 || (recipe.category && this.selectedCategories.has(recipe.category));

      // Tag filtering
      const tagMatch = this.selectedTags.size === 0 || Array.from(this.selectedTags).some((tag) => recipe.tags[tag]);

      return categoryMatch && tagMatch;
    });
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

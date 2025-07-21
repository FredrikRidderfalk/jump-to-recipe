import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipes } from '../../../assets/recipes/recipes';
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
    if (this.selectedCategories.size === 0) {
      this.filteredRecipes = [...this.recipes];
    } else {
      this.filteredRecipes = this.recipes.filter(
        (recipe) => recipe.category && this.selectedCategories.has(recipe.category),
      );
    }
  }

  isCategorySelected(category: string): boolean {
    return this.selectedCategories.has(category);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

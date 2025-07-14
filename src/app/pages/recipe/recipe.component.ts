import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, ActivatedRoute } from '@angular/router';
import { AllRecipes } from 'assets/recipes/recipes';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe.component.html',
})
export class RecipeComponent implements OnInit {
  isDropdownOpen = false;
  servings = 1;
  ingredientDoneStatus: boolean[] = [];
  instructionDoneStatus: boolean[] = [];
  recipe: any = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page on every navigation end event
      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const recipeParam = params['param'];
      this.recipe = AllRecipes.find((recipe) => recipe.param === recipeParam);
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  updateServings(value: number): void {
    this.servings = value;
    this.toggleDropdown();
  }

  toggleIngredientDone(index: number): void {
    this.ingredientDoneStatus[index] = !this.ingredientDoneStatus[index];
  }

  toggleInstructionDone(index: number): void {
    this.instructionDoneStatus[index] = !this.instructionDoneStatus[index];
  }
}

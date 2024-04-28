import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Recipes } from '../../../assets/recipes/recipes';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
})
export class RecipeComponent implements OnInit {
  isDropdownOpen = false;
  servings = 2;
  ingredientDoneStatus: boolean[] = [];
  instructionDoneStatus: boolean[] = [];
  recipe: any = null;

  constructor(private router: Router) {
    Recipes.forEach((recipe) => {
      if (window.location.search.includes(recipe.param)) {
        this.recipe = recipe;
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page on every navigation end event
      }
    });
  }

  ngOnInit(): void {
    console.log(this.recipe);
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

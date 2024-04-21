import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { recipe } from '../../../assets/recipes/tortilla-soup';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
})
export class RecipeComponent implements OnInit {
  // TODO: import recipes from assets folder and add recipeImage & 'done' property to ingredients

  isDropdownOpen = false;
  servings = 2;
  ingredientDoneStatus: boolean[] = [];
  instructionDoneStatus: boolean[] = [];
  recipe = recipe;

  constructor() {}

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

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tortillaSoup } from '../../../assets/recipes/tortilla-soup';
import { garlicNoodles } from '../../../assets/recipes/garlic-noodles';

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
  recipe: any = null;

  constructor() {
    if (window.location.search.includes('tortilla-soup')) {
      this.recipe = tortillaSoup;
    } else {
      this.recipe = garlicNoodles;
    }
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

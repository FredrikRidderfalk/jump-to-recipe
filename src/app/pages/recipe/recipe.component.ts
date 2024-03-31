import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
})
export class RecipeComponent {
  title = 'Tortilla Soup ⭐️';
  description = 'This is a delicious recipe for tortilla soup.';
  recipeImage = '../assets/images/tortilla-soup.jpg';

  isDropdownOpen = false;
  servings = 2;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  updateServings(value: number): void {
    this.servings = value;
    this.toggleDropdown();
  }
}

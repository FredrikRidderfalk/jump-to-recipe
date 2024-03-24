import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-green-500">{{title}}</h1>
    <img src="{{recipeImage}}" alt="{{title}}">
    <p>{{description}}</p>
  `,
})

export class RecipeComponent {
  title = 'Tortilla Soup ⭐️';
  description = 'This is a delicious recipe for tortilla soup.';
  recipeImage = '../assets/images/tortilla-soup.jpg';
}

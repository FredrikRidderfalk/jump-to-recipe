import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
})
export class RecipeComponent {
  // TODO: import recipes from assets folder and add recipeImage & 'done' property to ingredients

  recipe = {
    name: 'Tortilla Soup',
    recipeImage: '../assets/images/tortilla-soup.jpg',
    star: true,
    description:
      'A hearty and flavorful soup that originated in Mexico. A one-pot dish ready in just 15 minutesand we can add just about anything in it. The soup is usually made with pieces of fried corn tortillas, which add a crunchy texture to the soup. It also features canned beans, and we add all the aquafaba that comes with it. The soup is often garnished with toppings such as diced avocado, cilantro, red onion, and sour cream. It is a satisfying and filling meal that is perfect for a cold day.',
    tags: {
      quick: true,
      easy: true,
      temperature: '400',
      clean: true,
      cheap: true,
    },
    ingredients: [
      {
        name: 'Water',
        amount: 600,
        unit: 'ml',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Puréed tomatoes',
        amount: 200,
        unit: 'ml',
        flex: 'We can use canned crushed tomatoes instead, or even chop up fresh tomatoes ourselves.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Vegetable bouillon',
        amount: 2,
        unit: 'cubes',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Beans in aquafaba',
        amount: 400,
        unit: 'ml',
        flex: 'Kidney beans, great white beans, black beans, anything goes!',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Bell pepper',
        amount: 1,
        unit: '',
        flex: 'The bell pepper, corn, jackfruit, cilantro, and toppings can be substituted with anything. You can add more vegetables, but also add fewer vegetables than what we listed.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'BBQ sauce',
        amount: 50,
        unit: 'ml',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'MSG',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Sugar',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Chili flakes',
        amount: 1,
        unit: 'tbsp',
        flex: 'Or fresh chopped up chili if we have it. We often add a hot sauce instead, or a chili paste like Tobanjjan or tabasco.',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Avocado',
        amount: 1,
        unit: '',
        flex: '',
        optional: false,
        topping: true,
        done: false,
      },
      {
        name: 'Red onion',
        amount: 0.5,
        unit: '',
        flex: '',
        optional: false,
        topping: true,
        done: false,
      },
      {
        name: 'Cilantro',
        amount: 50,
        unit: 'ml',
        flex: '',
        optional: true,
        topping: true,
        done: false,
      },
      {
        name: 'Ketchup',
        amount: 50,
        unit: 'ml',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Light soy sauce',
        amount: 50,
        unit: 'ml',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Tortilla chips',
        amount: null,
        unit: '',
        flex: "This is added for crunch, so any chips fit. For example, we also love adding salt & vinegar chips, onion chips, BBQ chips, or if we don't have chips we may even go with roasted onion.",
        optional: false,
        topping: true,
        done: false,
      },
      {
        name: 'Oregano',
        amount: 1,
        unit: 'tbsp',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Corn',
        amount: 100,
        unit: 'g',
        flex: '',
        optional: false,
        topping: false,
        done: false,
      },
      {
        name: 'Jackfruit',
        amount: 100,
        unit: 'g',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Liquid smoke',
        amount: 2,
        unit: 'tsp',
        flex: '',
        optional: true,
        topping: false,
        done: false,
      },
      {
        name: 'Lime',
        amount: 1,
        unit: '',
        flex: "Use lime, lemon, or yuzu, or we can use any vinegar in half the amount if we don't have citrus.",
        optional: false,
        topping: false,
        done: true,
      },
    ],
    instructions: [
      'We add all the ingredients except the toppings and lime to a pot and bring to a boil. The toppings are the avocado, red onion, and tortilla chips. Remember to add the aquafaba with the beans into the pot.',
      'While bringing the pot to a boil, we chop up the toppings.',
      'We boil on medium-high heat for about 5 min. We taste the soup during this time, and add more of any ingredient we wish.',
      'When it has finished boiling we add the lime, and we also bring some extra lime to the table for us to squeeze in as we desire.',
      'We serve the toppings in bowls on the table for each person to freely take.',
    ],
    notes:
      'This soup is slightly different each time we make it thanks to its versitility. Sometimes we also add plant-based melty cheese to it or plant-based sour cream with garlic.',
  };

  isDropdownOpen = false;
  servings = 2;
  ingredientDoneStatus: boolean[] = [];
  instructionDoneStatus: boolean[] = [];

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

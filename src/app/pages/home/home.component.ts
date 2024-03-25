import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  recipes: any[] = [];

  tortillaSoup = {
    title: 'Tortilla Soup ⭐️',
    description: 'This is a delicious recipe for tortilla soup.',
    recipeImage: '../assets/images/tortilla-soup.jpg',
  };
  poké = {
    title: 'Poké Bowl 🥗',
    description: 'This is a delicious recipe for poké.',
    recipeImage: '../assets/images/poke.jpg',
  };
  arancini = {
    title: 'Arancini 🍚',
    description: 'This is a delicious recipe for arancini.',
    recipeImage: '../assets/images/arancini.jpeg',
  };
  burger = {
    title: 'Burger 🍔',
    description: 'This is a delicious recipe for a burger.',
    recipeImage: '../assets/images/burger.jpg',
  };
  orangeTofu = {
    title: 'Orange Tofu 🍊',
    description: 'This is a delicious recipe for orange tofu.',
    recipeImage: '../assets/images/orange-tofu.jpg',
  };
  ramen = {
    title: 'Ramen 🍜',
    description: 'This is a delicious recipe for ramen.',
    recipeImage: '../assets/images/ramen.png',
  };

  constructor() {
    console.log('HomeComponent constructor');
  }

  ngOnInit() {
    console.log('HomeComponent initialized');
    this.recipes = [
      this.tortillaSoup,
      this.poké,
      this.arancini,
      this.burger,
      this.orangeTofu,
      this.ramen,
    ];
    console.log(this.recipes);
  }
}

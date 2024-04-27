import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipes } from '../../../assets/recipes/recipes';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  recipes: any[] = [];

  ngOnInit() {
    this.recipes = Recipes;
    console.log(this.recipes);
  }
}

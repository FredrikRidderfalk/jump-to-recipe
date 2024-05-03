import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipes } from '../../../assets/recipes/recipes';
import { TagsComponent } from '../../components/tags.component';
import { UpperCasePipe } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, UpperCasePipe, TagsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  recipes: any[] = [];
  recipeViews: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.recipes = Recipes;
    console.log(this.recipes);

    this.apiService.getRecipeViews().subscribe(
      (data) => {
        this.recipeViews = data;
        console.log(this.recipeViews);
      },
      (error) => {
        console.error('There was an error!', error);
      },
    );
  }
}

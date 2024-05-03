import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipes } from '../../../assets/recipes/recipes';
import { TagsComponent } from '../../components/tags.component';
import { UpperCasePipe } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, UpperCasePipe, TagsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  recipes: any[] = [];
  recipeViews: any = [];

  private destroy$ = new Subject<void>();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.recipes = Recipes;
    console.log(this.recipes);

    this.apiService
      .getRecipeViews()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.recipeViews = data;
          console.log('recipe views 👀', this.recipeViews);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

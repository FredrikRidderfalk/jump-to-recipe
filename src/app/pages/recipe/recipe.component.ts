import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, ActivatedRoute } from '@angular/router';
import { AllRecipes } from 'assets/recipes';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './recipe.component.html',
})
export class RecipeComponent implements OnInit {
  servings = 1;
  isMetric = false;
  ingredientDoneStatus: boolean[] = [];
  instructionDoneStatus: boolean[] = [];
  recipe: any = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page on every navigation end event
      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const recipeParam = params['param'];
      this.recipe = AllRecipes.find((recipe) => recipe.param === recipeParam);
    });
  }

  incrementServings(): void {
    if (this.servings < 12) {
      this.servings++;
    }
  }

  decrementServings(): void {
    if (this.servings > 1) {
      this.servings--;
    }
  }

  toggleIngredientDone(index: number): void {
    this.ingredientDoneStatus[index] = !this.ingredientDoneStatus[index];
  }

  toggleInstructionDone(index: number): void {
    this.instructionDoneStatus[index] = !this.instructionDoneStatus[index];
  }

  setMetric(metric: boolean): void {
    this.isMetric = metric;
  }

  convertAmount(amount: number | undefined, unit: string | undefined): string {
    if (!amount) return '';

    if (this.isMetric && unit && unit.toLowerCase().includes('cup')) {
      // Convert cups to ml (1 cup = 240ml)
      const mlAmount = amount * 240;
      return mlAmount.toString();
    }

    return amount.toString();
  }

  convertUnit(unit: string | undefined): string {
    if (!unit) return '';

    if (this.isMetric && unit.toLowerCase().includes('cup')) {
      return 'ml';
    }

    return unit;
  }
}

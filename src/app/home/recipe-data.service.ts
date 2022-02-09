import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {

  private recipes: Recipe[] = [
    {
      id: 'V1',
      title: 'Dessert',
      imageUrl: 'assets/images/food.jpeg',
      ingredients: ['French Fries', 'Popcorn', 'Chips'],
    },
    {
      id: 'V2',
      title: 'Salad',
      imageUrl: 'assets/images/food1.jpeg',
      ingredients: ['French Fries', 'Popcorn', 'Chips'],
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: String) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    }
  }
}

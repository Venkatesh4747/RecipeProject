import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeDataService } from './recipe-data.service';
import { Recipe } from './recipe.modal'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  recipes: Recipe[];

  constructor(private route: Router, private recipeData: RecipeDataService) { }

  ngOnInit() {
    this.recipes = this.recipeData.getAllRecipes();
    console.log('the recipe', this.recipes);
  }

  empDetails() {
    this.route.navigate(['staff-details']);
  }

  recipePage(recipe) {
    console.log('recipeid', recipe);
    this.route.navigate(['/recipe.id'])
  }

}

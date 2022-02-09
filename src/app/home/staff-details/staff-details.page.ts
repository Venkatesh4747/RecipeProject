import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDataService } from '../recipe-data.service';
import { Recipe } from '../recipe.modal'


@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.page.html',
  styleUrls: ['./staff-details.page.scss'],
})
export class StaffDetailsPage implements OnInit {
  loadRecipe: Recipe;

  constructor( private activatedRoute: ActivatedRoute,
                private recipeData: RecipeDataService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')) {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadRecipe = this.recipeData.getRecipe(recipeId);

    });
  }

}

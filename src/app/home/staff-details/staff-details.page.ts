import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecipeDataService } from '../recipe-data.service';
import { Recipe } from '../recipe.modal'


@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.page.html',
  styleUrls: ['./staff-details.page.scss'],
})
export class StaffDetailsPage implements OnInit {
  loadRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
    private recipeData: RecipeDataService,
    private route: Router,
    private alert: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadRecipe = this.recipeData.getRecipe(recipeId);

    });
  }

  deleteRecipe() {
    this.alert.create({
      header: 'Are you sure',
      message: 'Do you really delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeData.deleteRecipe(this.loadRecipe.id);
            this.route.navigate(['home']);
          }
        }
      ]
    }).then(alertDialog => {
      alertDialog.present();
    })
   
  }

}

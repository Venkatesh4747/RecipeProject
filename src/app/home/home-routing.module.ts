import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    //  children: [
    //    {
    //      path: '',
    //      redirectTo: 'recipe-details',
    //      pathMatch: 'full'
    //    },
    //   {

    //     path: 'recipe-details',
    //     loadChildren: () => import('./staff-details/staff-details.module').then( m => m.StaffDetailsPageModule)
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

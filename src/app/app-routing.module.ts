import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DrinksComponent} from "./drinks/drinks.component";
import {AboutComponent} from "./about/about.component";
import {SingleDrinkComponent} from "./single-drink/single-drink.component";

const routes: Routes = [
  {path: 'drink/:id' ,component: SingleDrinkComponent},
  {path: '' ,component: HomeComponent},
  {path: 'drinks', component: DrinksComponent},
  {path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DrinksComponent } from './drinks/drinks.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import {DrinksService} from "./services/drinks.service";
import { HttpClientModule } from '@angular/common/http';
import { SingleDrinkComponent } from './single-drink/single-drink.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DrinksComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    SingleDrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DrinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {Component, OnInit} from '@angular/core';
import {Drink} from "../models/drink.model";
import {DrinksService} from "../services/drinks.service";
import {DrinksData} from "../models/drinks.model";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent {
  drinks!: Drink[] ;


  constructor(service: DrinksService) {
    service.getDrinks().subscribe(value => {
      this.drinks = value
      });

  }



}

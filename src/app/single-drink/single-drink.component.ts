import {Component, OnInit} from '@angular/core';
import {DrinksService} from "../services/drinks.service";
import {Drink} from "../models/drink.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DrinksData} from "../models/drinks.model";

@Component({
  selector: 'app-single-drink',
  templateUrl: './single-drink.component.html',
  styleUrls: ['./single-drink.component.scss']
})
export class SingleDrinkComponent implements OnInit{
  singleDrink: DrinksData = new DrinksData();
  id!: number | null ;
  constructor(public drinkService: DrinksService, public route: ActivatedRoute) {
  }
  getDrink(id :number){
    this.drinkService.getDrinkById(id).subscribe((data)=>{
      this.singleDrink = data
    })
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params:any)=>{
      this.id = +params.get('id');

      this.getDrink(this.id);
    })

  }
}

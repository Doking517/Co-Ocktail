import { map } from 'rxjs/operators';
import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {DrinksData} from "../models/drinks.model";
import {Drink} from "../models/drink.model";

@Injectable({
  providedIn: 'root'
})
export class DrinksService{
  apiDrinkUrl: string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
  singleDrinkApiUrl: string = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i"
  constructor(private http: HttpClient) {
  }
  getDrinks(){
    return this.http.get<DrinksData>(this.apiDrinkUrl).pipe(
      map((response: DrinksData) => {
       return response.drinks;
    }))
  }
  getDrinkById(id:number){
    return this.http.get<DrinksData>(`${this.singleDrinkApiUrl}=${id}`)
  }

}

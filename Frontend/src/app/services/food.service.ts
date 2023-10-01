import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood() :Food[] {

    return sample_foods ;

  }

  getAllFoodBySearchFood(searchitem:String) : Food[] {
    return sample_foods.filter( item => item.name.toLowerCase().includes( searchitem.toLowerCase())) ;
  }


}

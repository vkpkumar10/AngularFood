import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import { sample_foods, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllFood(): Food[] {
    return sample_foods;
  }

  getAllFoodBySearchFood(searchitem: String): Food[] {
    return sample_foods.filter((item) =>
      item.name.toLowerCase().includes(searchitem.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodByTags(tag: string): Food[] {
    return tag == 'All'
      ? this.getAllFood()
      : this.getAllFood().filter((food) => food.tags?.includes(tag));
  }

  // getAllFoodsByTag(tag: string): Food[] {
  //   return tag == "All" ?
  //     this.getAll() :
  //     this.getAll().filter(food => food.tags?.includes(tag));
  // }

  getFoodById(foodId: string): Food {
    return this.getAllFood().find((f) => f.id == foodId) ?? new Food();
  }
}

import { Injectable } from '@angular/core';
import { Food  } from '../shared/models/Food';
import { Tag  } from '../shared/models/Tag';
import { sample_foods  ,sample_tags} from 'src/data';

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


<<<<<<< HEAD
  getAllTags() : Tag[] {

    return sample_tags ;
  }


=======
>>>>>>> b4579a24edfd85b80472f4eecf47df6355a468ec
}

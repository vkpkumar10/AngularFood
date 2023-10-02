import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(
    private foodservice: FoodService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param.saerchTerm)
        this.foods = this.foodservice.getAllFoodBySearchFood(param.saerchTerm);
      else if (param.tag)

        this.foods = this.foodservice.getAllFoodByTags(param.tag);

      else this.foods = this.foodservice.getAllFood();
    });
  }
}



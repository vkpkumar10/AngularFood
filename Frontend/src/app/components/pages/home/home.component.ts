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
  ) {
    activatedRoute.params.subscribe((param) => {
      if (param.saerchTerm)
        this.foods = foodservice.getAllFoodBySearchFood(param.saerchTerm);
      else this.foods = foodservice.getAllFood();
    });
  }
  ngOnInit(): void {}
}

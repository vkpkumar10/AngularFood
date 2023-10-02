import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  tags: Tag[] = [];

  constructor(
    private foodService: FoodService,
    private actiavtedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }
}

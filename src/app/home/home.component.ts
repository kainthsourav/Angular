import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../Services/dish.service';
import {Promotion} from '../shared/Promotion';
import {PromotionService} from '../Services/promotion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish:Dish;
promotion:Promotion;

  constructor(private promotionService:PromotionService,
    private dishService:DishService) { }

  ngOnInit(): void {
    this.dish=this.dishService.getFeautredDish();
    this.promotion=this.promotionService.getFeaturedPromotion();
  }

}

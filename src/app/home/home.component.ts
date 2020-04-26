import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import {DishService} from '../Services/dish.service';
import {Promotion} from '../shared/Promotion';
import {PromotionService} from '../Services/promotion.service';
import {Leader} from '../shared/leader';
import {LeaderService} from '../Services/leader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish:Dish;
promotion:Promotion;
featuredLeader:Leader;

  constructor(private promotionService:PromotionService,
    private dishService:DishService,private leaderService:LeaderService) { }

  ngOnInit(): void {
    this.dishService.getFeautredDish().subscribe(dish=>this.dish=dish);
   this.promotionService.getFeaturedPromotion().subscribe(promotion=>this.promotion=promotion);
    this.leaderService.getFeaturedLeader().subscribe(featuredLeader=>this.featuredLeader=featuredLeader);
  }

}

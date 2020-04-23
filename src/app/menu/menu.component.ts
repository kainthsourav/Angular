import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import{DishService} from '../Services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  selecedDish:Dish;


  constructor(private dishServive:DishService) { }

  ngOnInit(): void {
   this.dishServive.getDishes().then(dishes=>this.dishes=dishes);
  }

  onSelect(dish:Dish)
  {
    this.selecedDish=dish;
  }
}

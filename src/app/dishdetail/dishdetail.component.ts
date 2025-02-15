import { Component, OnInit } from '@angular/core';
import {Params,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Dish} from '../shared/dish';
import{DishService} from '../Services/dish.service';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish:Dish;

  //
  dishIds:string[];
  prev:string;
  next:string;
  

  constructor(private dishService:DishService,
    private route:ActivatedRoute,
    private location:Location)  {
   }

  ngOnInit(): void {

    this.dishService.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.setPrevNext((dish.id).toString()); });

    const id = +this.route.snapshot.params['id'];
    console.log(typeof(id));
    this.dishService.getDish(id).subscribe(dish=>this.dish=dish);
    console.log('Data :',this.dish);
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack():void{
    this.location.back();
  }

}

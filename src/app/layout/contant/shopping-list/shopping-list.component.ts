import { Component, OnInit } from '@angular/core';
import { ingredient } from './../../../class/ingredient-model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] = [
    new ingredient('apple', 25),
    new ingredient('mango', 20),
  ];
  constructor() {}

  ngOnInit(): void {}
}

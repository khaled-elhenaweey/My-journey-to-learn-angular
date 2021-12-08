import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/class/recipe-model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'chicken',
      'hot good food for your hunger',
      'https://static.onecms.io/wp-content/uploads/sites/9/2021/02/12/roast-chicken-with-chile-basil-vinaigrette-charred-broccoli-potatoes-FT-RECIPE0321.jpg'
    ),
    new Recipe(
      'chicken',
      'hot good food for your hunger',
      'https://static.onecms.io/wp-content/uploads/sites/9/2021/02/12/roast-chicken-with-chile-basil-vinaigrette-charred-broccoli-potatoes-FT-RECIPE0321.jpg'
    ),
    new Recipe(
      'chicken',
      'hot good food for your hunger',
      'https://static.onecms.io/wp-content/uploads/sites/9/2021/02/12/roast-chicken-with-chile-basil-vinaigrette-charred-broccoli-potatoes-FT-RECIPE0321.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}

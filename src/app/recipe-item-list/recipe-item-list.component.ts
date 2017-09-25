import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item-list',
  templateUrl: './recipe-item-list.component.html',
  styleUrls: ['./recipe-item-list.component.css']
})
export class RecipeItemListComponent implements OnInit {

  onRecipeitemDelete(recipeItem) {

  }
// recipeItems is a property v
  recipeItems = [
  {
    id: 1,
    name: 'Big Easy Balls',
    category: 'tapas',
    medium: 'Tapas',
    cookedOn: null,
    isFavorite: false
  },
  {
    id: 2,
    name: 'Buff Balls',
    category: 'tapas',
    medium: 'Tapas',
    cookedOn: '1294166565384',
    isFavorite: true
  },
  {
    id: 3,
    name: 'Porkys Revenge',
    category: 'sandwiches',
    medium: 'Sandwiches',
    cookedOn: '1457166565384',
    isFavorite: false
  },
  {
    id: 4,
    name: 'Bleu bacon burger',
    category: 'Entrees',
    medium: 'Sandwiches',
    cookedOn: null,
    isFavorite: true
  },
  {
    id: 5,
    name: 'Chicken Tsunami',
    medium: 'Tapas',
    category: 'tapas',
    cookedOn: null,
    isFavorite: true
  },
]

  constructor() { }

  ngOnInit() {
  }

}

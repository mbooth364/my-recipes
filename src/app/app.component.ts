import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onRecipeItemDelete(recipeItem) {

  }

  // object Literal v
  firstRecipeItem = {
    id: 1,
    name: 'Big Easy Balls',
    category: 'tapas',
    cookedOn: null,
    isFavorite: false
  }
  // object literal ^
}

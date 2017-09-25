import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem;
  @Output() delete = new EventEmitter();
 
  onDelete() {
    this.delete.emit(this.recipeItem);
  }

  

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-item-form',
  templateUrl: './recipe-item-form.component.html',
  styleUrls: ['./recipe-item-form.component.css']
})
export class RecipeItemFormComponent implements OnInit {

  form;
  
  
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Sandwiches'),
      name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[\\w\\-\\s\\/]+')])),   
      category: new FormControl(''),
      cookedOn: new FormControl('', this.yearValidator),
    }) 
  }

  yearValidator(control) {
    if(control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1900;
    let maxYear = 2100;
    if(year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {'year': true};
    }
  }

  onSubmit(recipeItem) {
    console.log(recipeItem);
  }
}

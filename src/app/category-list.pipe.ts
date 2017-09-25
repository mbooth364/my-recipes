import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList',
})
export class CategoryListPipe implements PipeTransform {

  transform(recipeItems: any, args?: any): any {
    var categories = [];
    recipeItems.forEach(recipeItem => {
      if (categories.indexOf(recipeItem.category) <= -1) {
        categories.push(recipeItem.category);
      }
    });
    return categories.join(', ');
  }

}

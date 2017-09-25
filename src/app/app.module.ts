import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { FooterComponent } from './footer/footer.component';
import { RecipeItemListComponent } from './recipe-item-list/recipe-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { RecipeItemFormComponent } from './recipe-item-form/recipe-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeItemComponent,
    FooterComponent,
    RecipeItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    RecipeItemFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { ShoppingListComponentComponent } from './shopping-list/shopping-list-component/shopping-list-component.component';
import { ShoppingListEditorCompnentComponent } from './shopping-list/shopping-list-editor-compnent/shopping-list-editor-compnent.component';
import { RecipeListComponentComponent } from './recipe-book/recipe-list-component/recipe-list-component.component';
import { RecipeItemComponentComponent } from './recipe-book/recipe-item-component/recipe-item-component.component';
import { RecipeDetailComponentComponent } from './recipe-book/recipe-detail-component/recipe-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ShoppingListComponentComponent,
    ShoppingListEditorCompnentComponent,
    RecipeListComponentComponent,
    RecipeItemComponentComponent,
    RecipeDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

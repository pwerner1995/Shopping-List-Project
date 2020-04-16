import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe("testRecipe", "still a test recipe", "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg"),
    new Recipe("Another testRecipe", "still a test recipe", "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg")
  ]
  @Output() recipeWasSelected= new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}

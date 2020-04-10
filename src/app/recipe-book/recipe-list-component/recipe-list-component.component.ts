import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe("testRecipe", "still a test recipe", "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg"),
    new Recipe("testRecipe", "still a test recipe", "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

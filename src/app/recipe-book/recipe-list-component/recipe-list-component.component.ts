import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent implements OnInit {
  recipes: Recipe[]

  constructor(private recipeService: RecipeService) { }

  ngOnInit(){
    this.recipes = this.recipeService.getRecipes()
  } 


}

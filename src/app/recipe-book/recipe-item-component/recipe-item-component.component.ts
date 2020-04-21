import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item-component',
  templateUrl: './recipe-item-component.component.html',
  styleUrls: ['./recipe-item-component.component.css']
})
export class RecipeItemComponentComponent implements OnInit {
  @Input() recipe: Recipe
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe)
  }

}

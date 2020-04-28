import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-item-component',
  templateUrl: './recipe-item-component.component.html',
  styleUrls: ['./recipe-item-component.component.css']
})
export class RecipeItemComponentComponent implements OnInit {
  @Input() recipe: Recipe
  @Input() index: number

  constructor() { }

  ngOnInit() {
  }



}

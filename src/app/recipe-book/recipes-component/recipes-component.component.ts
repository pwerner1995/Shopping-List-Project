import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-component',
  templateUrl: './recipes-component.component.html',
  styleUrls: ['./recipes-component.component.css'],
  providers: [RecipeService]
})
export class RecipesComponentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }

}

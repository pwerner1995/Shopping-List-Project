import {Recipe} from './recipe.model'
import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()

export class RecipeService{
    private recipes: Recipe[] =[
        new Recipe("Spaghetti and Meatballs", "dope as meatballs", "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg", [
            new Ingredient('Meatballs', 5),
            new Ingredient('Pasta', 20)

        ]),
        new Recipe("Burger", "Welcome to Good Burger", "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg", [
            new Ingredient("Meat", 1),
            new Ingredient("Cheese", 1),
            new Ingredient("Buns", 2)

        ])
      ]

    recipeSelected = new EventEmitter <Recipe>()

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice()
    }

    getRecipe(index: number){
        return this.recipes[index]
    }

    addToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
    }
}
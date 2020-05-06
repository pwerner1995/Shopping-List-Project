import {Recipe} from './recipe.model'
import {  Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Subject } from 'rxjs'

@Injectable()

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>()
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

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe
        this.recipesChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1)
        this.recipesChanged.next(this.recipes.slice())
    }
}
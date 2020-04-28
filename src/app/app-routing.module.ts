import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RecipesComponentComponent } from './recipe-book/recipes-component/recipes-component.component';
import { ShoppingListComponentComponent } from './shopping-list/shopping-list-component/shopping-list-component.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponentComponent, children:[
        { path: '', component: RecipeStartComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponentComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}
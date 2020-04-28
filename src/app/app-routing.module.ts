import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RecipesComponentComponent } from './recipe-book/recipes-component/recipes-component.component';
import { ShoppingListComponentComponent } from './shopping-list/shopping-list-component/shopping-list-component.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailComponentComponent } from './recipe-book/recipe-detail-component/recipe-detail-component.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponentComponent, children:[
        { path: '', component: RecipeStartComponent},
        { path:'new', component: RecipeEditComponent},
        { path:':id', component: RecipeDetailComponentComponent},
        { path:':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponentComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RecipesComponentComponent } from './recipe-book/recipes-component/recipes-component.component';
import { ShoppingListComponentComponent } from './shopping-list/shopping-list-component/shopping-list-component.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailComponentComponent } from './recipe-book/recipe-detail-component/recipe-detail-component.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipe-book/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {
        path: 'recipes', 
        component: RecipesComponentComponent, 
        canActivate: [AuthGuard],
        children:[
            { path: '', component: RecipeStartComponent},
            { path:'new', component: RecipeEditComponent},
            { path:':id', component: RecipeDetailComponentComponent, resolve: [RecipesResolverService]},
            { path:':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
        ]},
    {path: 'shopping-list', component: ShoppingListComponentComponent},
    {path: 'auth', component: AuthComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}
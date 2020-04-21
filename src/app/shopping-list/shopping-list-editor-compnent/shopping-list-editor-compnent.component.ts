import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-editor-compnent',
  templateUrl: './shopping-list-editor-compnent.component.html',
  styleUrls: ['./shopping-list-editor-compnent.component.css']
})
export class ShoppingListEditorCompnentComponent implements OnInit {
  @ViewChild('nameInput',{static: false}) nameInputRef: ElementRef
  @ViewChild('amountInput',{static: false}) amountInputRef: ElementRef

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    this.slService.addIngredient(newIngredient)
  }

}

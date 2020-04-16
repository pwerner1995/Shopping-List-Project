import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-editor-compnent',
  templateUrl: './shopping-list-editor-compnent.component.html',
  styleUrls: ['./shopping-list-editor-compnent.component.css']
})
export class ShoppingListEditorCompnentComponent implements OnInit {
  @ViewChild('nameInput',{static: false}) nameInputRef: ElementRef
  @ViewChild('amountInput',{static: false}) amountInputRef: ElementRef
  @Output() ingredientAdded= new EventEmitter<Ingredient> ()

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    this.ingredientAdded.emit(newIngredient)
  }

}

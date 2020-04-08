import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListEditorCompnentComponent } from './shopping-list-editor-compnent.component';

describe('ShoppingListEditorCompnentComponent', () => {
  let component: ShoppingListEditorCompnentComponent;
  let fixture: ComponentFixture<ShoppingListEditorCompnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListEditorCompnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListEditorCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

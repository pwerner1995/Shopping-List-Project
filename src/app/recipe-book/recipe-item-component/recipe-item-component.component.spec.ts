import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemComponentComponent } from './recipe-item-component.component';

describe('RecipeItemComponentComponent', () => {
  let component: RecipeItemComponentComponent;
  let fixture: ComponentFixture<RecipeItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

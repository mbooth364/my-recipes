import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemFormComponent } from './recipe-item-form.component';

describe('RecipeItemFormComponent', () => {
  let component: RecipeItemFormComponent;
  let fixture: ComponentFixture<RecipeItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

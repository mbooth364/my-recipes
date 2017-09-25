import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemListComponent } from './recipe-item-list.component';

describe('RecipeItemListComponent', () => {
  let component: RecipeItemListComponent;
  let fixture: ComponentFixture<RecipeItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosdcastsCategoriesComponent } from './posdcasts-categories.component';

describe('PosdcastsCategoriesComponent', () => {
  let component: PosdcastsCategoriesComponent;
  let fixture: ComponentFixture<PosdcastsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosdcastsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosdcastsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

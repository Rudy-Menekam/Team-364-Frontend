import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePosdcastComponent } from './single-posdcast.component';

describe('SinglePosdcastComponent', () => {
  let component: SinglePosdcastComponent;
  let fixture: ComponentFixture<SinglePosdcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePosdcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePosdcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

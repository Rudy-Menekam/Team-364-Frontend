import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosdcastsListComponent } from './posdcasts-list.component';

describe('PosdcastsListComponent', () => {
  let component: PosdcastsListComponent;
  let fixture: ComponentFixture<PosdcastsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosdcastsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosdcastsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

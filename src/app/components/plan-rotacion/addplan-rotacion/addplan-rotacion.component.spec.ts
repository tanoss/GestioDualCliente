import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplanRotacionComponent } from './addplan-rotacion.component';

describe('AddplanRotacionComponent', () => {
  let component: AddplanRotacionComponent;
  let fixture: ComponentFixture<AddplanRotacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplanRotacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplanRotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

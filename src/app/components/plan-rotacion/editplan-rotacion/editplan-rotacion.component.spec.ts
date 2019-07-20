import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditplanRotacionComponent } from './editplan-rotacion.component';

describe('EditplanRotacionComponent', () => {
  let component: EditplanRotacionComponent;
  let fixture: ComponentFixture<EditplanRotacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditplanRotacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditplanRotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

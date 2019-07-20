import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelplanRotacionComponent } from './delplan-rotacion.component';

describe('DelplanRotacionComponent', () => {
  let component: DelplanRotacionComponent;
  let fixture: ComponentFixture<DelplanRotacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelplanRotacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelplanRotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

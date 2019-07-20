import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRotacionComponent } from './plan-rotacion.component';

describe('PlanRotacionComponent', () => {
  let component: PlanRotacionComponent;
  let fixture: ComponentFixture<PlanRotacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanRotacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanRotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanMarcoFormacionComponent } from './plan-marco-formacion.component';

describe('PlanMarcoFormacionComponent', () => {
  let component: PlanMarcoFormacionComponent;
  let fixture: ComponentFixture<PlanMarcoFormacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanMarcoFormacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanMarcoFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

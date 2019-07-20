import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelplanMarcoFormacionComponent } from './delplan-marco-formacion.component';

describe('DelplanMarcoFormacionComponent', () => {
  let component: DelplanMarcoFormacionComponent;
  let fixture: ComponentFixture<DelplanMarcoFormacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelplanMarcoFormacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelplanMarcoFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

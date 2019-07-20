import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddseguimientoEstudianteComponent } from './addseguimiento-estudiante.component';

describe('AddseguimientoEstudianteComponent', () => {
  let component: AddseguimientoEstudianteComponent;
  let fixture: ComponentFixture<AddseguimientoEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddseguimientoEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddseguimientoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

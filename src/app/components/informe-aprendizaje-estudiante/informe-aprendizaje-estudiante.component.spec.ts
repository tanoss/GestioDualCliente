import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeAprendizajeEstudianteComponent } from './informe-aprendizaje-estudiante.component';

describe('InformeAprendizajeEstudianteComponent', () => {
  let component: InformeAprendizajeEstudianteComponent;
  let fixture: ComponentFixture<InformeAprendizajeEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeAprendizajeEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeAprendizajeEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

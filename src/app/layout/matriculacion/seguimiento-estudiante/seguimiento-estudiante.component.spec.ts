import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoEstudianteComponent } from './seguimiento-estudiante.component';

describe('SeguimientoEstudianteComponent', () => {
  let component: SeguimientoEstudianteComponent;
  let fixture: ComponentFixture<SeguimientoEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

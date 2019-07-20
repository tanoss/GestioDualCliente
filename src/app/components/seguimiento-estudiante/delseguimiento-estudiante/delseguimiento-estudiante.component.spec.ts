import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelseguimientoEstudianteComponent } from './delseguimiento-estudiante.component';

describe('DelseguimientoEstudianteComponent', () => {
  let component: DelseguimientoEstudianteComponent;
  let fixture: ComponentFixture<DelseguimientoEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelseguimientoEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelseguimientoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

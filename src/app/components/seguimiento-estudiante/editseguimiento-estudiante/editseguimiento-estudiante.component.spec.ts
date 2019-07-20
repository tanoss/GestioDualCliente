import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditseguimientoEstudianteComponent } from './editseguimiento-estudiante.component';

describe('EditseguimientoEstudianteComponent', () => {
  let component: EditseguimientoEstudianteComponent;
  let fixture: ComponentFixture<EditseguimientoEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditseguimientoEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditseguimientoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

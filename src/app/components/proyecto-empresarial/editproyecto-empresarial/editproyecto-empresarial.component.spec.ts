import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproyectoEmpresarialComponent } from './editproyecto-empresarial.component';

describe('EditproyectoEmpresarialComponent', () => {
  let component: EditproyectoEmpresarialComponent;
  let fixture: ComponentFixture<EditproyectoEmpresarialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditproyectoEmpresarialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproyectoEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

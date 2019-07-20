import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproyectoEmpresarialComponent } from './addproyecto-empresarial.component';

describe('AddproyectoEmpresarialComponent', () => {
  let component: AddproyectoEmpresarialComponent;
  let fixture: ComponentFixture<AddproyectoEmpresarialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproyectoEmpresarialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproyectoEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

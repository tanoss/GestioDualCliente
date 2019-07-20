import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelproyectoEmpresarialComponent } from './delproyecto-empresarial.component';

describe('DelproyectoEmpresarialComponent', () => {
  let component: DelproyectoEmpresarialComponent;
  let fixture: ComponentFixture<DelproyectoEmpresarialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelproyectoEmpresarialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelproyectoEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

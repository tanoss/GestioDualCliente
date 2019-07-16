import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoEmpresarialComponent } from './proyecto-empresarial.component';

describe('ProyectoEmpresarialComponent', () => {
  let component: ProyectoEmpresarialComponent;
  let fixture: ComponentFixture<ProyectoEmpresarialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoEmpresarialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinfEstudianteComponent } from './editinf-estudiante.component';

describe('EditinfEstudianteComponent', () => {
  let component: EditinfEstudianteComponent;
  let fixture: ComponentFixture<EditinfEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditinfEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinfEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

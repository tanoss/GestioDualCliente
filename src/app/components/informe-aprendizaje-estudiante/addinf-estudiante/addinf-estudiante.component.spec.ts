import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinfEstudianteComponent } from './addinf-estudiante.component';

describe('AddinfEstudianteComponent', () => {
  let component: AddinfEstudianteComponent;
  let fixture: ComponentFixture<AddinfEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinfEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinfEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

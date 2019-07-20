import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelinfEstudianteComponent } from './delinf-estudiante.component';

describe('DelinfEstudianteComponent', () => {
  let component: DelinfEstudianteComponent;
  let fixture: ComponentFixture<DelinfEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelinfEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelinfEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

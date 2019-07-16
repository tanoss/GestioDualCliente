import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeAprendizajeTutorComponent } from './informe-aprendizaje-tutor.component';

describe('InformeAprendizajeTutorComponent', () => {
  let component: InformeAprendizajeTutorComponent;
  let fixture: ComponentFixture<InformeAprendizajeTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformeAprendizajeTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeAprendizajeTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditplanMarcoFormacionComponent } from './editplan-marco-formacion.component';

describe('EditplanMarcoFormacionComponent', () => {
  let component: EditplanMarcoFormacionComponent;
  let fixture: ComponentFixture<EditplanMarcoFormacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditplanMarcoFormacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditplanMarcoFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

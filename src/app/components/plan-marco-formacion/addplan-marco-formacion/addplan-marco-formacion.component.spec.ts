import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplanMarcoFormacionComponent } from './addplan-marco-formacion.component';

describe('AddplanMarcoFormacionComponent', () => {
  let component: AddplanMarcoFormacionComponent;
  let fixture: ComponentFixture<AddplanMarcoFormacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddplanMarcoFormacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplanMarcoFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

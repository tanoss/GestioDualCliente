import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinfTutorComponent } from './addinf-tutor.component';

describe('AddinfTutorComponent', () => {
  let component: AddinfTutorComponent;
  let fixture: ComponentFixture<AddinfTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinfTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinfTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

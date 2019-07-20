import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditinfTutorComponent } from './editinf-tutor.component';

describe('EditinfTutorComponent', () => {
  let component: EditinfTutorComponent;
  let fixture: ComponentFixture<EditinfTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditinfTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditinfTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

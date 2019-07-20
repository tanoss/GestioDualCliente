import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelinfTutorComponent } from './delinf-tutor.component';

describe('DelinfTutorComponent', () => {
  let component: DelinfTutorComponent;
  let fixture: ComponentFixture<DelinfTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelinfTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelinfTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

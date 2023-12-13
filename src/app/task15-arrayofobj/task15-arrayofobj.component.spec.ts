import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task15ArrayofobjComponent } from './task15-arrayofobj.component';

describe('Task15ArrayofobjComponent', () => {
  let component: Task15ArrayofobjComponent;
  let fixture: ComponentFixture<Task15ArrayofobjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task15ArrayofobjComponent]
    });
    fixture = TestBed.createComponent(Task15ArrayofobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

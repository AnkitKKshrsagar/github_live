import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task15Component } from './task15.component';

describe('Task15Component', () => {
  let component: Task15Component;
  let fixture: ComponentFixture<Task15Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task15Component]
    });
    fixture = TestBed.createComponent(Task15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

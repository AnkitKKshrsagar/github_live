import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task14Component } from './task14.component';

describe('Task14Component', () => {
  let component: Task14Component;
  let fixture: ComponentFixture<Task14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task14Component]
    });
    fixture = TestBed.createComponent(Task14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

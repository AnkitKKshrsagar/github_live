import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseCrudComponent } from './reverse-crud.component';

describe('ReverseCrudComponent', () => {
  let component: ReverseCrudComponent;
  let fixture: ComponentFixture<ReverseCrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReverseCrudComponent]
    });
    fixture = TestBed.createComponent(ReverseCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

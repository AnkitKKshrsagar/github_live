import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaildComponent } from './chaild.component';

describe('ChaildComponent', () => {
  let component: ChaildComponent;
  let fixture: ComponentFixture<ChaildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaildComponent]
    });
    fixture = TestBed.createComponent(ChaildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

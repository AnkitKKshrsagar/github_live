import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependancyinjectionComponent } from './dependancyinjection.component';

describe('DependancyinjectionComponent', () => {
  let component: DependancyinjectionComponent;
  let fixture: ComponentFixture<DependancyinjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependancyinjectionComponent]
    });
    fixture = TestBed.createComponent(DependancyinjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFirstComponent } from './employee-first.component';

describe('EmployeeFirstComponent', () => {
  let component: EmployeeFirstComponent;
  let fixture: ComponentFixture<EmployeeFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

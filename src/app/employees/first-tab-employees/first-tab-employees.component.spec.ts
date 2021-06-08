import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTabEmployeesComponent } from './first-tab-employees.component';

describe('FirstTabEmployeesComponent', () => {
  let component: FirstTabEmployeesComponent;
  let fixture: ComponentFixture<FirstTabEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTabEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTabEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

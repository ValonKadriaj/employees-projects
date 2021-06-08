import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTabEmployeesComponent } from './second-tab-employees.component';

describe('SecondTabEmployeesComponent', () => {
  let component: SecondTabEmployeesComponent;
  let fixture: ComponentFixture<SecondTabEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondTabEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondTabEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

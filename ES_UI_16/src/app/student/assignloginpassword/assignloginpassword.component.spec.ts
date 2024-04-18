import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignloginpasswordComponent } from './assignloginpassword.component';

describe('AssignloginpasswordComponent', () => {
  let component: AssignloginpasswordComponent;
  let fixture: ComponentFixture<AssignloginpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignloginpasswordComponent]
    });
    fixture = TestBed.createComponent(AssignloginpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

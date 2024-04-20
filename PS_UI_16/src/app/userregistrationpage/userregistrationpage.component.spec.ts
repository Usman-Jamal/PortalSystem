import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregistrationpageComponent } from './userregistrationpage.component';

describe('UserregistrationpageComponent', () => {
  let component: UserregistrationpageComponent;
  let fixture: ComponentFixture<UserregistrationpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserregistrationpageComponent]
    });
    fixture = TestBed.createComponent(UserregistrationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

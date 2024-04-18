import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertStudentComponent } from './upsert.student.component';

describe('UpsertStudentComponent', () => {
  let component: UpsertStudentComponent;
  let fixture: ComponentFixture<UpsertStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpsertStudentComponent]
    });
    fixture = TestBed.createComponent(UpsertStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

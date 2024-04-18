import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { GridOptions } from 'ag-grid-community';
import { AppConstants } from 'src/app/app.constants';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {
  showButton: boolean = true;
  students: student[] = [];
  private selectedStudent: student = { 
    id: 0, 
    email: '',
    password: '',
    name: '',
    address: '',
    contact: '',
    gender: '',
    userType: '',
  };

  constructor(private buttonservice: ServiceService, private http: HttpClient, private router: Router)
  {
    this.getStudents();
    if (this.showButton)
    {
      this.OpenStudentDetails();
    }
    else
    {
      this.OpenAdminDetails();
    }
  }
  ngOnInit(): void {
    this.buttonservice.showButton$.subscribe(value => this.showButton = value);
  }
  toggleButton() 
  {
    this.showButton = !this.showButton;
    this.buttonservice.setShowButton(this.showButton);
  }
  OpenAdminDetails() 
  {
    this.http.get<student[]>(AppConstants.admin_web_api_url).subscribe((response) => {
      this.students = response;
    });
    this.toggleButton();
  }
  OpenStudentDetails() 
  {
    this.http.get<student[]>(AppConstants.student_web_api_url).subscribe((response) => {
      this.students = response;
    });
    this.toggleButton();
  }

  getStudents() {
    this.http.get<student[]>(AppConstants.student_web_api_url).subscribe((response) => {
      this.students = response;
    });
  }

  onSelectionChanged(event: any) {
    this.selectedStudent = event.api.getSelectedRows()[0];
  }

  addStudent() {
    this.router.navigateByUrl("/upsert-student", { state: { data: { 
      id: 0, 
      username: '',
      password: '',
      firstname: '', 
      lastname: '', 
      email: '',
      contactnumber: '',
      qualification: '',
      gender: '',
      role_Id: 0,
    } } });
  }
  AssignIdPassword()
  {
    if (this.selectedStudent.id !== 0)
    {
      this.router.navigateByUrl("/assignloginpassword", { state: { data: this.selectedStudent } });
    }
    else
    {
      alert("Please select a record");
    }
  }

  updateStudent() 
  {
    if (this.selectedStudent.id !== 0)
    {
    this.router.navigateByUrl("/upsert-student", { state: { data: this.selectedStudent } });
    }
    else
    {
      alert("Please select a record");
    }
  }

  deleteStudent(id : number) 
  {
    if (id !== 0)
    {
      if (window.confirm('Are you sure?'))
      {
        this.http.delete(AppConstants.student_web_api_url + 'id').subscribe(() => {
          this.getStudents();
        });
      }
      else
      {
        this.router.navigateByUrl("/manage-student")
      }
    }
    else
    {
      alert("Please select a record");
    }
  }
}

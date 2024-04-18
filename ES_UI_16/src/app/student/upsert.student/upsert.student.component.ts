import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-upsert.student',
  templateUrl: './upsert.student.component.html',
  styleUrls: ['./upsert.student.component.css']
})
export class UpsertStudentComponent implements OnInit {
  showButton: boolean = true;
  student: student = { 
    id: 0, 
    email: '',
    password: '',
    name: '',
    address: '',
    contact: '',
    gender: '',
    userType: ''
  };

  constructor(private buttonservice: ServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.buttonservice.showButton$.subscribe(value => this.showButton = value);
    this.student = history.state.data;
  }

  saveStudent() {
    if (!this.showButton)
    {
      if (this.student.id == 0) {
        this.http.post(AppConstants.student_web_api_url, this.student).subscribe(() => {
          this.router.navigateByUrl("/manage-student")
        });
      }
      else {
        this.http.put(AppConstants.student_web_api_url + this.student.id, this.student).subscribe(() => {
          this.router.navigateByUrl("/manage-student")
        });
      }
    }
    else
    {
      if (this.student.id == 0) {
        this.http.post(AppConstants.admin_web_api_url, this.student).subscribe(() => {
          this.router.navigateByUrl("/manage-student")
        });
      }
      else {
        this.http.put(AppConstants.admin_web_api_url + this.student.id, this.student).subscribe(() => {
          this.router.navigateByUrl("/manage-student")
        });
      }
    }
  }
}

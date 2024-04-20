import { Component, OnInit } from '@angular/core';
import { classes } from '../classes';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConstants } from '../app.constants';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-userenrollment',
  templateUrl: './userenrollment.component.html',
  styleUrls: ['./userenrollment.component.css']
})
export class UserenrollmentComponent implements OnInit{
    classes: classes[] = [];
    User_Id: number = 0;
    isuserEnrolled: { [key: number]: string } = {};
  
    constructor(private sharedservice: SharedserviceService, private http: HttpClient, private router: Router)
    {
      this.getClasses();
    }
  
    getClasses() {
      this.http.get<classes[]>(AppConstants.classes_web_api_url).subscribe((response) => {
        this.classes = response;
        this.classes.forEach((classItem) => {
          this.isUserEnrolled(this.User_Id, classItem.id);
        });
      });
    }
    ngOnInit(): void 
    {
      this.User_Id = this.sharedservice.getStudentId();
    }
    EnrollUser(user_id: number, class_id: number) 
    {
      if (user_id !== 0 && class_id !== 0)
        {
          const userEnroll = {
            id: 0,
            enrolledStatus: '',
            enrolledDate: '',
            user_Id: user_id,
            class_Id: class_id,
          };
          this.http.post(AppConstants.userEnrollments_web_api_url, userEnroll).subscribe(() => {
            this.getClasses();
            alert("Enrollment Successfull..!");
          });
        }
        else
        {
          alert("Invalid Operation");
        }
    }

    isUserEnrolled(user_id: number, class_id: number)
    {
      if (user_id !== 0 && class_id !== 0)
        {
          const url = `${AppConstants.userEnrollments_web_api_url}${user_id}, ${class_id}`;
          this.http.get(url, { responseType: 'text' }).subscribe((response) => {
            this.isuserEnrolled[class_id] = response;
          });
        }
        else
        {
          alert("Invalid Operation");
        }
    }
  }

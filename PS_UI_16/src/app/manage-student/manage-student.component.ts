import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { AppConstants } from 'src/app/app.constants';
import { Router } from '@angular/router';
import { classes } from '../classes';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {
  showButton: boolean = true;
  selectedClassId : number = 0;
  classes: classes[] = [];
  students: student[] = [];

  constructor(private http: HttpClient, private router: Router)
  {
    this.getClasses();
  }
  ngOnInit(): void 
  {
    const selectElement = document.getElementById('classStudents') as HTMLSelectElement;
    selectElement.addEventListener('change', (event) => {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      this.selectedClassId = parseInt(selectedOption.value);
      this.getStudentsByClassId(this.selectedClassId);
    });
  }

  getStudentsByClassId(id: number)
  {
    this.http.get<student[]>(AppConstants.userEnrollments_web_api_url + id).subscribe((response) => {
      this.students = response;
    });
  }

  getClasses() {
    this.http.get<classes[]>(AppConstants.classes_web_api_url).subscribe((response) => {
      this.classes = response;
    });
  }

  getStudents() {
    this.http.get<student[]>(AppConstants.student_web_api_url).subscribe((response) => {
      this.students = response;
    });
    this.selectedClassId = 0;
  }

  deleteStudent(id : number) 
  {
    if (this.selectedClassId !== 0 && id !== 0)
      {
        if (window.confirm('You are deleting user enrollment \nAre you sure?'))
          {
            let idArray: number[] = [id, this.selectedClassId];
            const url = `${AppConstants.userEnrollments_web_api_url}${idArray[0]}, ${idArray[1]}`;
            this.http.delete(url).subscribe(() => {
              this.getStudentsByClassId(this.selectedClassId);
            });
          }
          else
          {
            this.router.navigateByUrl("/app-manage-student")
          }
      }
      else if (this.selectedClassId == 0 && id !== 0)
      {
        if (window.confirm('You are deleting the user permamnently \nAre you sure?'))
          {
            this.http.delete(AppConstants.student_web_api_url + id).subscribe(() => {
              this.getStudents();
            });
          }
          else
          {
            this.router.navigateByUrl("/app-manage-student");
          }      
      }
    }
  }

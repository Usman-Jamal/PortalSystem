import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { AppConstants } from '../app.constants';
import { classes } from '../classes';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  isAddFormVisible: boolean = false;
  classes: classes[] = [];

  constructor(private http: HttpClient, private router: Router)
  {
    this.getClasses();
  }

  getClasses() {
    this.http.get<classes[]>(AppConstants.classes_web_api_url).subscribe((response) => {
      this.classes = response;
    });
  }

  openForm() {
    this.isAddFormVisible = true;
  }

  submitForm() {
    const gradeLevel = (document.getElementById('gradeLevel') as HTMLInputElement).value;
    const timings = (document.getElementById('timings') as HTMLInputElement).value;
    const maxClassSize = (document.getElementById('maxClassSize') as HTMLInputElement).value;
    
    if (gradeLevel !== "null" && timings !== "null" && maxClassSize !== "null")
      {
        const newClass = {
          id : 0,
          gradeLevel: gradeLevel,
          timings: timings,
          maxClassSize: parseInt(maxClassSize)
        };
        this.http.post(AppConstants.classes_web_api_url, newClass).subscribe(() => {
          this.getClasses();
        });
        this.isAddFormVisible = false;
      }
      else
      {
        alert("No Record Selected");
      }
  }

  cancelForm() {
    this.isAddFormVisible = false;
  }

  deleteClass(id: number) 
  {
    if (id !== 0 )
    {
      if (window.confirm('Are you sure?'))
      {
        this.http.delete(AppConstants.classes_web_api_url + id).subscribe(() => {
          this.getClasses();
        });
      }
      else
      {
        this.router.navigateByUrl("/app-classes")
      }
    }
    else
    {
      alert("Invalid Operation!");
    }
  }
}

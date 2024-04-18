import { Component } from '@angular/core';
import { classes } from '../student/classes';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  classes: classes[] = [];
  private selectedClass: classes = { 
    id: 0, 
    gradeLevel: '',
    timings: '',
    maxClassSize: 0
  };

  constructor(private http: HttpClient, private router: Router)
  {
    this.getClasses();
  }

  getClasses() {
    this.http.get<classes[]>(AppConstants.classes_web_api_url).subscribe((response) => {
      this.classes = response;
    });
  }

  onSelectionChanged(event: any) {
    this.classes = event.api.getSelectedRows()[0];
  }

  addStudent() {
    this.router.navigateByUrl("/upsert-student", { state: { data: { 
      id: 0, 
      gradeLevel: '',
      timings: '',
      maxClassSize: 0
    } } });
  }

  updateStudent() 
  {
    if (this.selectedClass.id !== 0)
    {
    this.router.navigateByUrl("/upsert-student", { state: { data: this.selectedClass } });
    }
    else
    {
      alert("Please select a record");
    }
  }

  deleteClass(id: number) 
  {
    if (id !== 0 )
    {
      if (window.confirm('Are you sure?'))
      {
        alert(id);
        this.http.delete(AppConstants.classes_web_api_url + 'id').subscribe(() => {
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

import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-assignloginpassword',
  templateUrl: './assignloginpassword.component.html',
  styleUrls: ['./assignloginpassword.component.css']
})
export class AssignloginpasswordComponent implements OnInit 
{
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

  constructor(private http : HttpClient, private router : Router) {}
  
  ngOnInit(): void {
    this.student = history.state.data;
  }
  saveCredentials() 
  {
    if (this.student.id !== 0) {
      this.http.put(AppConstants.assignIdPassword_web_api_url + '', this.student).subscribe(() => {
        this.router.navigateByUrl("/manage-student")
      });
    }
    else
    {
      alert("Unknown Error Occured")
    }
  }
}

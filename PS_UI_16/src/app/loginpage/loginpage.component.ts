import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { student } from '../student';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../app.constants';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  student: student[] = [];
  constructor (private sharedservice: SharedserviceService, private http: HttpClient, private router: Router)
  {

  }
  submitForm()
  {
    const userEmail = (document.getElementById('email') as HTMLInputElement).value;
    const userPassword = (document.getElementById('password') as HTMLInputElement).value;
    
    const loginUrl = `${AppConstants.login_web_api_url}?email=${userEmail}&password=${userPassword}`;
    
    this.http.post<student[]>(loginUrl, {}).subscribe((response) => {
      if (response == null || response === undefined) {
        alert('Invalid Email or Password');
      } else {
        this.handleLoginResponse(response);
      }
    });
  }
  private handleLoginResponse(response: any) 
  {
    const userType = response.userType;
    const user_id = response.id;
    if (userType === 'Student') 
      {
        this.sharedservice.setStudentId(user_id);
        alert('Login Successful as Student');
        this.router.navigate(['/studentdashboard/dashboard']);
      } 
      else if (userType === 'Admin') 
        {
          this.sharedservice.setAdminId(user_id);
          alert('Login Successful as Admin');
          this.router.navigate(['/admindashboard/dashboard']);
        } 
        else 
        {
          alert('Invalid User');
        }
      }
  }

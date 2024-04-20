import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '../app.constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userregistrationpage',
  templateUrl: './userregistrationpage.component.html',
  styleUrls: ['./userregistrationpage.component.css']
})
export class UserregistrationpageComponent {

  constructor (private http: HttpClient, private router: Router)
  {

  }
  submitForm()
  {
    const inputemail = (document.getElementById('email') as HTMLInputElement).value;
    const inputpassword = (document.getElementById('password') as HTMLInputElement).value;
    const inputname = (document.getElementById('name') as HTMLInputElement).value;
    const inputaddress = (document.getElementById('address') as HTMLInputElement).value;
    const inputcontact = (document.getElementById('contact') as HTMLInputElement).value;
    const inputgender = (document.getElementById('gender') as HTMLInputElement).value;
    if (inputemail !== '' && inputpassword !== '' && inputname !== '' && inputaddress !== '' && inputcontact !== '' && inputgender !== 'null')
      {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (typeof inputemail === 'string' && emailRegex.test(inputemail))
          {
            const newUser = {
              id: 0,
              email: String(inputemail),
              password: String(inputpassword),
              name: String(inputname),
              address: String(inputaddress),
              contact: String(inputcontact),
              gender: String(inputgender),
              usertype: '',
            };
            this.http.post(AppConstants.student_web_api_url, newUser).subscribe(() => {
              this.router.navigateByUrl('/loginpage');
            });
            alert("Registration Successfull \nYou can now Login");
          }
          else 
          {
            alert("Email format is not correct");
          }
      }
      else
      {
        alert("Some Missing Fields \nFill All Fields");
      }    
  }
}

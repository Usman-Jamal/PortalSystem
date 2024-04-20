import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassesComponent } from './classes/classes.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserenrollmentComponent } from './userenrollment/userenrollment.component';
import { UserregistrationpageComponent } from './userregistrationpage/userregistrationpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageStudentComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    ClassesComponent,
    StudentdashboardComponent,
    AdmindashboardComponent,
    LoginpageComponent,
    UserenrollmentComponent,
    UserregistrationpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatIconModule, FormsModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

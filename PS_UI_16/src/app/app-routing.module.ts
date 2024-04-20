import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ClassesComponent } from './classes/classes.component';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserenrollmentComponent } from './userenrollment/userenrollment.component';
import { UserregistrationpageComponent } from './userregistrationpage/userregistrationpage.component';

const routes: Routes = [
  {
    path: '',
    component: LoginpageComponent
  },
  {
    path: 'loginpage',
    component: LoginpageComponent
  },
  {
    path: 'userregistrationpage',
    component: UserregistrationpageComponent
  },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    children: [
      {
        path: 'manage-student',
        component: ManageStudentComponent
      },
    ]
  },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    children: [
      {
        path: 'classes',
        component: ClassesComponent
      },
    ]
  },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
    ]
  },
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    children: [
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },
  {
    path: 'studentdashboard',
    component: StudentdashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  },
  {
    path: 'studentdashboard',
    component: StudentdashboardComponent,
    children: [
      {
        path: 'userenrollment',
        component: UserenrollmentComponent
      },
    ]
  },
  {
    path: 'studentdashboard',
    component: StudentdashboardComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
    ]
  },
  {
    path: 'studentdashboard',
    component: StudentdashboardComponent,
    children: [
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },

  {
    path: 'studentdashboard',
    component: StudentdashboardComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

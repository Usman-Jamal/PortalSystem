import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageStudentComponent } from './student/manage-student/manage-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UpsertStudentComponent } from './student/upsert.student/upsert.student.component';
import { AssignloginpasswordComponent } from './student/assignloginpassword/assignloginpassword.component';
import { ClassesComponent } from './classes/classes.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'manage-student',
    component: ManageStudentComponent
  },
  {
    path: 'classes',
    component: ClassesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'upsert-student',
    component: UpsertStudentComponent
  },
  {
    path: 'assignloginpassword',
    component: AssignloginpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { ManageStudentComponent } from './student/manage-student/manage-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AgGridModule} from 'ag-grid-angular';
import { UpsertStudentComponent } from './student/upsert.student/upsert.student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignloginpasswordComponent } from './student/assignloginpassword/assignloginpassword.component';
import { ClassesComponent } from './classes/classes.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageStudentComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    UpsertStudentComponent,
    AssignloginpasswordComponent,
    ClassesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatIconModule, FormsModule
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

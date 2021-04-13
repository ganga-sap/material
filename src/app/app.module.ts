import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { MaterialComponent } from './material/material.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
   // EditComponent,
    UpdateComponent,
    ViewComponent,
    MaterialComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule
  ],
  // exports: [
   // MatDialogModule
  //],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents:[UpdateComponent]
})
export class AppModule { }

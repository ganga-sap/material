import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';


@NgModule({
  declarations: [UpdateComponent,ViewComponent,EmployeeComponent, MatConfirmDialogComponent],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeManagementModule { }

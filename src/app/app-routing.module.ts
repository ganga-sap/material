import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './employee-management/view/view.component';
import { EmployeeComponent } from './employee-management/employee/employee.component';
import { UpdateComponent } from './employee-management/update/update.component'; 
const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

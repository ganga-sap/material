import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: "",
  component: EmployeeComponent
 },
 { path: "employee/add/:id",
  component:UpdateComponent
 },
 { path: "employee/edit/:id",
  component: UpdateComponent
 },
 { path: "employee/view/:id",
  component: ViewComponent
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeManagementRoutingModule { }

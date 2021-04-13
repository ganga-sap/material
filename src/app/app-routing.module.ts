import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { StudentsComponent } from './students/students.component';
import { UpdateComponent } from './update/update.component'; 
const routes: Routes = [
 { path: "",
  component: StudentsComponent
 },
 { path: "student/add/:id",
  component:UpdateComponent
 },
 { path: "student/edit/:id",
  component: UpdateComponent
 },
 { path: "student/view/:id",
  component: ViewComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

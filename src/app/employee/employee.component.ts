import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-students',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService:EmployeeService, private dialog: MatDialog ,private button:MatButtonModule) { }
  
  ngOnInit(): void {
       this.getList();
  }
    getList(){
      this.employeeService.getAll().subscribe(data=>{this.employees=data});
    }
  delete(id:any){
    this.employeeService.delete(id).subscribe((data:any)=>{
      console.log("deleted");
     
      })
}
openDialog() {
  const dialogRef = this.dialog.open(UpdateComponent,{
    width: '660px',
      height: '560px',
    data:{id:'0'}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
openEditDialog(employeeId:any) {
  const dialogRef = this.dialog.open(UpdateComponent,{
    width: '660px',
      height: '560px',
    data:{id:employeeId}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}


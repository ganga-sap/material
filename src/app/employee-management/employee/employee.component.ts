import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { MatButtonModule } from '@angular/material/button';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

@Component({
  selector: 'app-employee',
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
    // this.employeeService.delete(id).subscribe((data:any)=>{
    //   console.log("deleted");
      this.openConfirmDialog('Are you sure to delete this record ?');
      .afterClosed().subscribe(res =>{
        console.log(res);
      }
      }
      openConfirmDialog(msg){
        return this.dialog.open(MatConfirmDialogComponent,{
          width:'390px',
          panelClass:'confirm-dialog-container',
          disableClose:true
          data:{
            message :msg
          }
      
        });

    }
      
    
openDialog(employeeId:any) {
  const dialogRef = this.dialog.open(UpdateComponent,{
    width: '400px',
      height: '560px',
    data:{id:employeeId}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  
}

}


  

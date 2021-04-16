import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { MatButtonModule } from '@angular/material/button';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

  
export class EmployeeComponent implements OnInit {
  employee: Employee[];
  employees: Employee[];
  notificationService: any;
  displayedColumns:string[]=['name','phoneno','email','address','actions'];
  dataSource = new MatTableDataSource<any>();
  constructor(private snackbar:MatSnackBar,private employeeService:EmployeeService, private dialog: MatDialog ,private button:MatButtonModule) { }
  
  ngOnInit(): void {
       this.getList();
      
  }
    getList(){
      this.employeeService.getAll().subscribe(data=>{this.employees=data;
     
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
openConfirmDialog(employeeId:any) {
  const dialogRef = this.dialog.open(MatConfirmDialogComponent,{
    width:'250px',
      panelClass :'confirm-dialog-container',
      disableClose:true,
      data:{id:employeeId}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}




  




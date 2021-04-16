import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.scss']
})
export class MatConfirmDialogComponent implements OnInit {
id:any;
  constructor(private employeeService:EmployeeService,@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef:MatDialogRef<MatConfirmDialogComponent>) { }

  ngOnInit(): void {
    this.id=this.data.id;
  }
 closeDialog(){
   this.dialogRef.close(false);
 }
deletebyId(){
  this.employeeService.delete(this.id).subscribe(data=>{
    console.log("deleted");
  })
}
}



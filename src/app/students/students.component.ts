import { Component, OnInit } from '@angular/core';
import { Student } from '../models/employee.model';
import { StudentService } from '../services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[];
  constructor(private studentService:StudentService, private dialog: MatDialog ,private button:MatButtonModule) { }
  
  ngOnInit(): void {
       this.getList();
  }
    getList(){
      this.studentService.getAll().subscribe(data=>{this.students=data});
    }
  delete(id:any){
    this.studentService.delete(id).subscribe((data:any)=>{
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

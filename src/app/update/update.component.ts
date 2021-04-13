import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../models/employee.model';
import { StudentService } from '../services/employee.service';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id:any;
  header:String;
  editmode:boolean;
  student:any ={};

 constructor(private router:Router,public dialogref: MatDialogRef<StudentsComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private route:ActivatedRoute, private studentService:StudentService,private stuService:StudentService) { }

 ngOnInit(): void {
   this.id= this.data.id
   if(this.id==0){
    this.header = 'Add Student';
    this.editmode=false;
   }else{
    this.header = 'Edit Student';
    this.editmode=true;
    this.getData();
   }
  
 }
    onSubmit(form: NgForm){
    if(this.editmode){
      console.log(this.student);
      this.stuService.update(this.id,this.student).subscribe(data=>{console.log("Recieved")});
      this.router.navigateByUrl('');
    }else{
     console.log(this.student);
     this.stuService.onAdd(this.student).subscribe(data=>{console.log("Recieved")});
     this.router.navigateByUrl('');
    }
    }
    getData()
  {
    this.studentService.getById(this.id).subscribe((data: Student[])=>{
      this.student=data;
     
    })
    
  }
}


import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeComponent } from '../employee/employee.component';
import {FormControl, NgForm} from '@angular/forms';
import{ FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
 
})
export class UpdateComponent implements OnInit {
  id:any;
  empForm: FormGroup;
  header:String;
  editmode:boolean;
  employee:any ={};
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
 constructor(private router:Router,public dialogref: MatDialogRef<EmployeeComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private route:ActivatedRoute, private employeeService:EmployeeService,private empService:EmployeeService,private _fb: FormBuilder) { }

 ngOnInit(): void {
   this.id= this.data.id
   if(this.id==0){
    this.header = 'Add Employee';
    this.editmode=false;
   }else{
    this.header = 'Edit Employee';
    this.editmode=true;
    this.getData();
   }
   this.empForm = this._fb.group({
    name : ['',Validators.required],
    email : ['',Validators.required],
    phoneno : ['',[Validators.required,Validators.minLength(8)]],
    address : ['',Validators.required],
    dob : ['',Validators.required],
    bloodgroup : ['',Validators.required],
    bank_acc_no : ['',Validators.required],
    pan_card_no: ['',Validators.required],
  });
  
 }
    onSubmit(empForm:any){
    if(this.editmode){
      console.log(this.employee);
      this.empService.update(this.id,this.employee).subscribe(data=>{console.log("Recieved")});
      this.router.navigateByUrl('');
    }else{
     console.log(this.employee);
     this.empService.onAdd(this.employee).subscribe(data=>{console.log("Recieved")});
     this.router.navigateByUrl('');
    }
    }
    getData()
  {
    this.employeeService.getById(this.id).subscribe((data:Employee[])=>{
      this.empForm.patchValue(data);
     
    })
    
  }
}




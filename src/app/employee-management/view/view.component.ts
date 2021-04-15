import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../../models/employee';
import {EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  employee:any ={};
  id:any;
  constructor(private router:Router, private route:ActivatedRoute,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
    this.getData();
  }
getData()
  {
    this.employeeService.getById(this.id).subscribe((data: Employee[])=>{
      this.employee=data;
     
    })
}
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../models/employee.model';
import { StudentService } from '../services/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  student:any ={};
  id:any;
  constructor(private router:Router, private route:ActivatedRoute,private studentService:StudentService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
    this.getData();
  }
getData()
  {
    this.studentService.getById(this.id).subscribe((data: Student[])=>{
      this.student=data;
     
    })
}
}

import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {​​​​​​​​ Observable }​​​​​​​​ from'rxjs';
import {  throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  openConfirmDialog() {
    throw new Error('Method not implemented.');
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
  
    

onAdd(user:any):Observable<any>

{
    return this.http.post<any>('http://localhost:8080/employees/add',user,this.httpOptions);
  }
  getAll():Observable<any>{
    return this.http.get<any>('http://localhost:8080/employees/list',this.httpOptions);
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>('http://localhost:8080/employees/delete/'+id,this.httpOptions);
 }
 getById(id:any): Observable<any> {
  return this.http.get<any>('http://localhost:8080/employees/employee/' + id,this.httpOptions)
}
update(id:number,user:any): Observable<any> {
    
  return this.http.put<any>('http://localhost:8080/employees/update/'+id, JSON.stringify(user), this.httpOptions)
}
}
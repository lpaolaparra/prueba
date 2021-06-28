import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//  import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  
  API_URI = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get(`${this.API_URI}/employees`)
  }

  getOneEmployee(id: string){
    return this.http.get(`${this.API_URI}/employees/${id}`)
  }

  saveEmployee(employee){
    return this.http.post(`${this.API_URI}/employees`,employee)
  }

  deleteEmployee(id: string){
    return this.http.delete(`${this.API_URI}/employees/${id}`)
  }

  updateEmployee(id: string|number , updateEmployee: any){
    return this.http.put(`${this.API_URI}/employees/edit/${id}`, updateEmployee)
  }


}

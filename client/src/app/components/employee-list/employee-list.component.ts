import { Component, HostBinding, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  @HostBinding('class') classes = 'row';
  employees: any = [];

  constructor( private emloyeesService: EmployeesService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(){
    this.emloyeesService.getEmployees().subscribe(
      res => {
        this.employees = res;
      },
      err => console.error(err)
    )
  }

  deleteEmployee(id: string){
    this.emloyeesService.deleteEmployee(id)
      .subscribe(
        res => {
          console.log(res);
          this.getEmpleados();
        },
        err => console.error(err)
      )
  }



}

import { Component, HostBinding, OnInit } from '@angular/core';
import {EmployeesService} from '../../services/employees.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  
  @HostBinding('class') classes = 'row';

  employee: any = {
    id:0,
    fullName: '',
    descripcion: '',
    image: '',
    created_at: new Date()
  }

  edit: boolean = false;

  constructor(private employeesService: EmployeesService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activeRoute.snapshot.params;
    if (params.id) {
      this.employeesService.getOneEmployee(params.id)
        .subscribe(
          res => {
            console.log(res[0]);
            this.employee = res[0];
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewEmployee(){

    delete this.employee.created_at;
    delete this.employee.id;

    this.employeesService.saveEmployee(this.employee)
      .subscribe(
        res =>{
          console.log(res);
          this.route.navigate(['/employees'])
        },
        err => console.error(err)
      )
  }
  updateEmployee(){
    delete this.employee.created_at;

   this.employeesService.updateEmployee(this.employee.id,this.employee)
     .subscribe(
       res =>{
         console.log(res);
         this.route.navigate(['/employees'])
       },
       err => console.error(err)
     )
  }

}

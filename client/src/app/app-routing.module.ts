import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './components/employee-list/employee-list.component'
import {EmployeeFormComponent} from './components/employee-form/employee-form.component'
import {EmployeeEditComponent} from './components/employee-edit/employee-edit.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'employees/add',
    component: EmployeeFormComponent
  },
  {
    path: 'employees/edit/:id',
    component: EmployeeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

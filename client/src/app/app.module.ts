import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {EmployeesService } from './services/employees.service';
import {FormsModule} from '@angular/forms'

import { from } from 'rxjs';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

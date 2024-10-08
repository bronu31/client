import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
    /*this.employees=[{
      "id":1,
      "name":"first",
      "surname":"first",
      "lastName":"first",
      "birthdate": new Date()

    }]*/
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employees=data;
    })
  }

}

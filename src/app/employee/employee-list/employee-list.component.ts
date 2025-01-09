import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {AbstractBasicFunctions} from "../../BasicFunctionalityForClasses/abstract-basic-functions";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent extends AbstractBasicFunctions<Employee> implements OnInit {


  constructor(private employeeService: EmployeeService) {
    super(employeeService);
  }

  ngOnInit(): void {
    this.getEntity();
  }

  convertToRuDate(date?: Date) {
    return this.employeeService.birtdateToRuDate(date);
  }

}

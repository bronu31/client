import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
import {HelperClass} from "../utils/HelperClass";
import {AbstractBasicFunctionsForService} from "../BasicFunctionalityForClasses/abstract-basic-functions-for-service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends AbstractBasicFunctionsForService<Employee> {

  constructor(override httpClient: HttpClient) {
    super(httpClient);
    this.baseURL += "employees"
  }
  birtdateToRuDate(birtdate?:Date): string{
    return HelperClass.convertToRuDate(birtdate);
  }

}

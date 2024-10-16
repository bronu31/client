import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
import {HelperClass} from "../utils/HelperClass";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{

  private baseURL="http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}employees`);
    //return this.httpClient.get<Employee[]>(`employees`);
  }
  birtdateToRuDate(birtdate?:Date): string{
    return HelperClass.convertToRuDate(birtdate);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../employee/employee";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseURL="http://localhost:8080/api/companies";
  constructor(private httpClient: HttpClient) {}

  getCompaniesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
}

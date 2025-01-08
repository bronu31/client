import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../employee/employee";
import {AbstractBasicFunctionsForService} from "../BasicFunctionalityForClasses/abstract-basic-functions-for-service";
import {Company} from "./company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends AbstractBasicFunctionsForService<Company> {


  constructor(override httpClient: HttpClient) {
    super(httpClient);
    this.baseURL += "companies";
  }

}

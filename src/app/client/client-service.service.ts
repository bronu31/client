import { Injectable } from '@angular/core';
import {AbstractBasicFunctionsForService} from "../BasicFunctionalityForClasses/abstract-basic-functions-for-service";
import {Client} from "./client";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService extends AbstractBasicFunctionsForService<Client>{

  constructor(override httpClient: HttpClient) {
    super(httpClient);
    this.baseURL += "users";
  }
}

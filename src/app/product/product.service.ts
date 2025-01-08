import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";
import {AbstractBasicFunctionsForService} from "../BasicFunctionalityForClasses/abstract-basic-functions-for-service";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractBasicFunctionsForService<Product> {

  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
    this.baseURL += "products";
  }

}

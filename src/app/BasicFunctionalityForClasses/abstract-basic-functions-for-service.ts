import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export abstract class AbstractBasicFunctionsForService<T> {

  protected baseURL="http://localhost:8080/api/";
  protected constructor(protected httpClient: HttpClient) {}

  getEntityList(): Observable<T[]>{
    return this.httpClient.get<T[]>(`${this.baseURL}`);
  }
}

import {Observable} from "rxjs";

interface BasicService<T>{

  getEntityList(): Observable<T[]>;
  getEntityById(): Observable<T>;
}

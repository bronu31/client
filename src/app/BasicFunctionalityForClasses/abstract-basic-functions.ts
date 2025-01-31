import {ProductService} from "../product/product.service";
import {AbstractBasicFunctionsForService} from "./abstract-basic-functions-for-service";

export abstract class AbstractBasicFunctions <T>{

  entity: T[] | undefined;


  protected constructor(private service : AbstractBasicFunctionsForService<T>) {}

  getEntityAll(){
        this.service.getEntityList().subscribe(data=>
          this.entity=data);
      }
  /*getEntityOne(id:number){
    this.service.getEntityById(id).subscribe(data=>
      this.entity=data);
  }*/
}

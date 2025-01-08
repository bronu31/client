import {ProductService} from "../product/product.service";
import {AbstractBasicFunctionsForService} from "./abstract-basic-functions-for-service";

export abstract class AbstractBasicFunctions <T>{

  entity: T[] | undefined;


  constructor(private service : AbstractBasicFunctionsForService<T>) {}

      private getEntity(){
        this.service.getEntityList().subscribe(data=>
          this.entity=data);
      }
}

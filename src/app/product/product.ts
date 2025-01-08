import {Company} from "../company/company";

export interface Product {

  id: number;
  name: String;
  producer: Company;
  rating: number;
  description: String;
}

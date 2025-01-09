import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";
import {AbstractBasicFunctions} from "../../BasicFunctionalityForClasses/abstract-basic-functions";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent extends AbstractBasicFunctions<Product> implements OnInit {


  constructor(private productService: ProductService) {
    super(productService);
  }


  ngOnInit(): void {
    this.getEntity();
  }

}

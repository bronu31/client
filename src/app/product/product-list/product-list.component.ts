import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: Product[] | undefined;

  constructor(private productService: ProductService) {}

  private getProducts(){
    this.productService.getProductList().subscribe(data=>
    this.products=data);
  }

  ngOnInit(): void {
    this.getProducts();
  }

}

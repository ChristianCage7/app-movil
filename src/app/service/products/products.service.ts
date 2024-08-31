import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] =[];

  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }

  addProduct(product: Product): void{
    this.products.push(this.product);
  }
}

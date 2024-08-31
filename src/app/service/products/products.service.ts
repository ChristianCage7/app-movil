<<<<<<< HEAD
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
=======
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
>>>>>>> ee41db5de83b4e9e46a4b709872432e35c05bebf

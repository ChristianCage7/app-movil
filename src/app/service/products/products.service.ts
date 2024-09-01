import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] =[];

  constructor() { 

    this.products = [
      {
        id: 1,
        sku: 1000,
        name: 'Zapatos',
        company: 'CAT',
        stock: 21,
        price: 69990
      },
      {
        id: 2,
        sku: 1001,
        name: 'Pelota',
        company: 'Peloton',
        stock: 20,
        price: 9990
      }
    ];

    //Para que este producto aparezca por default en el homepage
    this.productsSubject = new BehaviorSubject<Product[]>(this.products);
    this.products$ = this.productsSubject.asObservable();
  }

// BehaviorSubject para emitir cambios en la lista de productos
private productsSubject = new BehaviorSubject<Product[]>(this.products);
products$ = this.productsSubject.asObservable();

getProducts(): Product[] {
  return this.products;
}

addProduct(product: Product): void {
  this.products.push(product);
  // Emitir la lista actualizada de productos
  this.productsSubject.next(this.products);
}
}

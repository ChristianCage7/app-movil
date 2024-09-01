import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/service/products/products.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'addproduct-modal',
  templateUrl: './addproduct-modal.component.html',
  styleUrls: ['./addproduct-modal.component.scss'],
})
export class AddProductModalComponent   {

  newProduct: Product = {
    id: 0,
    sku: 0,
    name: '',
    company: '',
    stock: 0,
    price: 0,
  };

  constructor(private productsService: ProductsService, private router: Router, private modalController: ModalController) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addProduct() {
    this.newProduct.id = this.productsService.getProducts().length + 1;
    this.productsService.addProduct(this.newProduct);
    this.modalController.dismiss();
  }

  close(){
    this.modalController.dismiss();
  }

}


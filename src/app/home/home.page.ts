import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users/users.service';
import { Users } from '../models/user';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductsService } from '../service/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user$: Observable<Users | null> = this.userService.currentUser$;
  products: Product[] = [];
  isAdmin: boolean = false;

  constructor(private userService: UsersService,
    private router: Router,
    private productService: ProductsService) { }

    ngOnInit() {

      //Obtiene los productos desde el servicio
      this.productService.products$.subscribe(products => {
        console.log('Productos recibidos:', products);
        this.products = products;
      });

      //Verifica si el usuario es admin
      this.user$.subscribe(user =>{
        if(user){
          this.isAdmin = this.userService.isAdmin();
        }
      });
  }

  /**Link hacia "Añadir productos"
  goToAddProducts(){
    this.router.navigate(['addproduct']);
  }

  //Link al log in
  goToLogin() {
    this.router.navigate(['user-login']);
  }

  //Link al log out
  logout() {
    this.userService.logout();
    this.router.navigate(['home']);
  }**/


}

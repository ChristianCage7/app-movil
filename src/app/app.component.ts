import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './service/users/users.service';
import { Observable } from 'rxjs';
import { Users } from './models/user';
import { MenuController } from '@ionic/angular'
import { ModalController } from '@ionic/angular';
import { AddProductModalComponent } from './page/addproduct-modal/addproduct-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  user$: Observable<Users | null> = this.userService.currentUser$;
  isAdmin: boolean = false;
  isLogged: boolean = false;
  username: string | null =null;

  constructor(private userService: UsersService, 
    private router: Router,
  private menuControl: MenuController,
private modalController: ModalController) {}

  ngOnInit() {
    this.user$.subscribe(user => {
      this.isLogged = !!user;
      this.isAdmin = this.userService.isAdmin();
      this.username = user ? user.username : null;
    });
  }
  

    /*Link hacia "Añadir productos"
    goToAddProducts(){
      this.router.navigate(['addproduct']);
      this.menuControl.close();
    }*/

    async goToAddProducts(){
      const modal = await this.modalController.create({
        component: AddProductModalComponent,
      });
      return await modal.present();
    }

    
    //Link al log in
    goToLogin() {
      this.router.navigate(['user-login']);
      this.menuControl.close();
    }
  
    //Link al log out
    logout() {
      this.userService.logout();
      this.router.navigate(['home']);
      this.menuControl.close();
    }

    async closeMenu(){
      await this.menuControl.close();
    }


}

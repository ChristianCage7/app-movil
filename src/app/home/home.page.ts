<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users/users.service';
import { Users } from '../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user$: Observable<Users | null> = this.userService.currentUser$;

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit() {}

  goToLogin() {
    this.router.navigate(['user-login']);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['home']); // Navega a la página de home después de desloguearse
  }
}
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../service/users/users.service';
import { Users } from '../models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user$: Observable<Users | null> = this.userService.currentUser$;

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit() {}

  goToLogin() {
    this.router.navigate(['user-login']);
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['home']); // Navega a la página de home después de desloguearse
  }
}
>>>>>>> ee41db5de83b4e9e46a4b709872432e35c05bebf

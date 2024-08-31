import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user!:Users;

  constructor(private router: Router) {}

  ngOnInit(){
    const navigation = this.router.getCurrentNavigation();
    console.info(navigation?.extras?.state?.['user'])
    console.info(this.user)
  }

}

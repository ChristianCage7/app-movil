import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/user';
import { UsersService } from 'src/app/service/users/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(private p_userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  login(username: string, password: string){
    const response = this.p_userService.autentification(username,password);
    if (response != null){
      console.info("Usuario existe")
      this.router.navigate(['home'],{
        state:{
          user:response
        }
      })

    }else{
      console.info("No existe")
    }
  }

}

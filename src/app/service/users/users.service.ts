import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user_list: Users[]=[
    {
    username:"1",
    password:"1",
    },
    
  ]

  constructor() { }

  autentification(username: string, password: string){
    for(let i = 0; i < this.user_list.length; i++){
      if(this.user_list[i].username && this.user_list[i].password == username && password ){
        return this.user_list
      }
    }return false;
  }
}

import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})


export class UsersLoginService {

  lista_de_usuarios: Users[] = [
    {
      username: "hola",
      password: "hola1"
    }

  ]

  constructor() { }

  encontrar_usuario(userInfo: Users) {
    for (let i = 0; i < this.lista_de_usuarios.length; i++){
      if (this.lista_de_usuarios[i].username == userInfo.username && this.lista_de_usuarios[i].password == userInfo.password) {
        return true;
      }
    } return false;
  }
}

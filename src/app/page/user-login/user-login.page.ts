import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleType } from 'src/app/models/role';
import { UsersService } from 'src/app/service/users/users.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage implements OnInit {

  username: string = ""
  password: string = ""
  message: string = ""

  constructor(
    private userService: UsersService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  /* Login usuario */
  async login() {
    const response = this.userService.autentification(this.username, this.password);
    if (response != null) {
      const roleName = response.role.id === RoleType.Admin ? 'Admin' : 'Cliente';
      this.message = `Usuario: ${response.username}`;
      console.log('Username:', this.username)
      this.router.navigate(['home'], {
        state: {
          user: response
        }
      });
    } else {
      await this.showAlert('Error', 'Usuario o contraseña incorrecta');
      console.info("No existe");
      this.username ="";
      this.password ="";
    }
  }

  /* Alerta de error */
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  /*Botón cancelar*/
  cancel() {
    this.router.navigate(['home']);  // Redirige a la página de inicio o donde desees
  }
}
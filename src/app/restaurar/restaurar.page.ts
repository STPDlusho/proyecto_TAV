import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular'; 
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.page.html',
  styleUrls: ['./restaurar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RestaurarPage implements OnInit {

  username: string = '';
  npass: string = '';
  ncpass: string = '';
  passreset: boolean = false;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private authService: AuthService, private router: Router, private titleService: Title) { }

  restaurar() {
    const reset = this.authService.restaurarpass(this.username, this.npass);
    if (this.username === '' || this.npass === '' || this.ncpass === '') {
      this.showToast('Por favor, complete todos los campos');
      return;
    }

    if (this.username.length < 4 && this.username.length > 8) {
      this.showToast('El nombre de usuario debe contener 4 a 8 caracteres.');
      return;
    }

    if (this.npass.length < 4 && this.npass.length > 8) {
      this.showToast('El nombre de usuario debe contener 4 a 8 caracteres.');
      return;
    }


    if (this.npass !== this.ncpass) {
      this.showToast('Las contraseñas deben de ser iguales.');
      return;
    }    

    if (reset) {
      this.passreset = true;
      this.router.navigate(['/splash-restaurar']).then(() => {
      setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      }); 
      // Puedes redirigir al usuario a otra página o mostrar un mensaje de éxito.
    } else {
      console.log("No se pudo actualizar el usuario")
      // Mostrar un mensaje de error si el usuario no se encuentra.
    }
  }

  ngOnInit() {
  }

  iraInicio() {
    this.router.navigate(['/splash']).then(() => {
      setTimeout(() => {
          this.router.navigate(['/inicio']);
        }, 3000);
      }); 
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    await toast.present();
  }


}

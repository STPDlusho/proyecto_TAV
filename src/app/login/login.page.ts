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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private authService: AuthService, private router: Router, private titleService: Title) { }

  login() {
    if (this.username === '' || this.password === '') {
      this.showToast('Por favor, ingrese los valores solicitados.');
      return;
    }
    
    if (this.username.length < 4 && this.username.length > 8) {
      this.showToast('El nombre de usuario debe contener 4 a 8 caracteres.');
      return;
    }

    if (this.password.length < 4 && this.password.length  > 8) {
      this.showToast('La contraseña debe ser un número de 4 dígitos.');
      return;
    }

    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/splash-sesion']).then(() => {
      setTimeout(() => {
          this.router.navigate(['/qr']);
        }, 3000);
      }); 
    } else {
      this.showToast('Credenciales inválidas.');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    await toast.present();
  }

  iraRestaurar() {
    this.router.navigate(['/splash']).then(() => {
      setTimeout(() => {
          this.router.navigate(['/restaurar']);
        }, 3000);
      }); 
  }

  iraInicio() {
    this.router.navigate(['/splash']).then(() => {
      setTimeout(() => {
          this.router.navigate(['/inicio']);
        }, 3000);
      }); 
  }
  
  navigateToLogin() {
    this.router.navigate(['/login']); 
  }

  navigateToRegistro() {
    this.router.navigate(['/registro']); 
  }

  ngOnInit() {
  }

}

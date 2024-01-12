import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular'; 
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class RegistroPage implements OnInit {

  username: string = '';
  password: string = '';
  cpassword: string = '';
  name: string = '';
  lname: string = '';
  rut: string = '';
  car: string = '';

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private authService: AuthService, private router: Router) { }

  registrarse() {
    if (this.username === '' || this.password === '' || this.cpassword === '' || this.name === '' || this.lname === '' || this.rut === '' || this.car === '') {
      this.showToast('Por favor, complete todos los campos');
      return;
    }

    if (this.rut.length != 8 &&  isNaN(+this.password)) {
      this.showToast('El rut no debe de contener guion ni digito verificador.');
      return;
    }

    if (this.username.length < 4 && this.username.length > 8) {
      this.showToast('El nombre de usuario debe contener 4 a 8 caracteres.');
      return;
    }
    
    if (this.password.length < 4 && this.username.length > 8) {
      this.showToast('La contraseña debe ser un número de 4 dígitos.');
      return;
    }

    if (this.name.length <= 1 && this.username.length > 8) {
      this.showToast('El nombre debe contener 4 a 8 caracteres.');
      return;
    }

    if (this.lname.length <= 1 && this.password.length  > 8) {
      this.showToast('El apellido debe contener 4 a 8 caracteres.');
      return;
    }

    if (this.car.length <= 1) {
      this.showToast('Ingrese una carrera valida.');
      return;
    }

    if (this.password !== this.cpassword) {
      this.showToast('Las contraseñas deben de ser iguales.');
      return;
    }    

    if (this.authService.registro(this.username, this.password, this.name, this.lname, this.rut, this.car)) {
      this.router.navigate(['/splash-registro']).then(() => {
        setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        }); 

    } else {
      this.showToast('Este usuario ya existe.');
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

  iraInicio() {
    this.router.navigate(['/splash']).then(() => {
      setTimeout(() => {
          this.router.navigate(['/inicio']);
        }, 3000);
      }); 
  }

  ngOnInit() {
  }

}

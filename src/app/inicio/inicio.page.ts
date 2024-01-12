import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular'; 
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, private authService: AuthService, private router: Router) { }

  iraLogin(){
    this.router.navigate(['/splash']).then(() => {
      setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      }); 
  }

  iraRegistro(){
    this.router.navigate(['/splash']).then(() => {
      setTimeout(() => {
          this.router.navigate(['/registro']);
        }, 3000);
      }); 
  }

  ngOnInit() {
  }

}

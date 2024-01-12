import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-splash-sesion',
  templateUrl: './splash-sesion.page.html',
  styleUrls: ['./splash-sesion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SplashSesionPage implements OnInit {

  loggedInUser: { username: string; password: string; name: string; lname: string; rut: string; car: string } | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const datosusuario = localStorage.getItem('usuarioLogg');
    if (datosusuario) {
      this.loggedInUser = JSON.parse(datosusuario);
    }
  }

}

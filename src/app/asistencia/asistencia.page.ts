import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AsistenciaPage implements OnInit {

  loggedInUser: { username: string; password: string; name: string; lname: string; rut: string; car: string } | null = null;

  qrData: any;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  iraInicio() {
    this.router.navigate(['/splash']).then(() => {
      setTimeout(() => {
          this.router.navigate(['/inicio']);
        }, 3000);
      }); 
  }

  ngOnInit(): void {
    const datosusuario = localStorage.getItem('usuarioLogg');
    if (datosusuario) {
      this.loggedInUser = JSON.parse(datosusuario);
    }
  
    this.route.queryParams.subscribe((params) => {
      if (params && params['qrData']) { 
        this.qrData = JSON.parse(params['qrData']); 
      }
    });
  }
}
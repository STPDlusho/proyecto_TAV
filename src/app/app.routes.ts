import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'splash',
    loadComponent: () => import('./splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'splash-sesion',
    loadComponent: () => import('./splash-sesion/splash-sesion.page').then( m => m.SplashSesionPage)
  },
  {
    path: 'splash-registro',
    loadComponent: () => import('./splash-registro/splash-registro.page').then( m => m.SplashRegistroPage)
  },
  {
    path: 'asistencia',
    loadComponent: () => import('./asistencia/asistencia.page').then( m => m.AsistenciaPage)
  },
  {
    path: 'restaurar',
    loadComponent: () => import('./restaurar/restaurar.page').then( m => m.RestaurarPage)
  },
  {
    path: 'splash-restaurar',
    loadComponent: () => import('./splash-restaurar/splash-restaurar.page').then( m => m.SplashRestaurarPage)
  },
  {
    path: 'qr',
    loadComponent: () => import('./qr/qr.page').then( m => m.QrPage)
  }
];

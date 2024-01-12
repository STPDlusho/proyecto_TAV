import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { username: string; password: string; name: string; lname: string, rut: string, car: string }[] = [];

  constructor() {
    const usuariosGuardados = localStorage.getItem('usuariosRegistrados');
    if (usuariosGuardados) {
      this.users = JSON.parse(usuariosGuardados);
    }
  }

  registro(username: string, password: string, name: string, lname: string, rut: string, car: string): boolean {
    const usuarioExistente = this.users.find(user => user.username === username);
    if (usuarioExistente) { 
      console.log("Este usuario ya existe");
      return false; 
    }

    const usuarioReg = { username, password, name, lname, rut, car };
    this.users.push(usuarioReg);
  
    localStorage.setItem('usuariosRegistrados', JSON.stringify(this.users));
    localStorage.setItem('usuarioLogg', JSON.stringify(usuarioReg));
  
    return true; 
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('usuarioLogg', JSON.stringify(user));
      return true;
    }

    return false;
    console.log("No se encuentra el usuario") 
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('usuarioLogg');
  }

  logout() {
    localStorage.removeItem('usuarioLogg');
  }

  getLoggedInUser() {
    return localStorage.getItem('usuarioLogg');
  }

  restaurarpass (username : string, npass: string): boolean {
    const buscarUsuario = this.users.findIndex(user => user.username === username);
    if (buscarUsuario !== -1) {
      // Actualiza la contraseña del usuario
      this.users[buscarUsuario].password = npass;
      
      // Actualiza el almacenamiento local
      localStorage.setItem('usuariosRegistrados', JSON.stringify(this.users));
      
      return true;
    }
    
    return false;
    console.log("No se a encontrado el usuario")
  }

}
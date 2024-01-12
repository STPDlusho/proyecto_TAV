import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-splash-registro',
  templateUrl: './splash-registro.page.html',
  styleUrls: ['./splash-registro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SplashRegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

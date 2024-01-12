import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-splash-restaurar',
  templateUrl: './splash-restaurar.page.html',
  styleUrls: ['./splash-restaurar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SplashRestaurarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

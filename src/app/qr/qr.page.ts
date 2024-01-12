import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController } from '@ionic/angular';
import { ElementRef } from '@angular/core';
import jsqr from 'jsqr';
import { ToastController } from '@ionic/angular'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class QrPage implements OnInit {

  scanActive = false;
  scanResult = '';
  @ViewChild('video', { static: false }) video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLVideoElement>;

  videoElement : any;
  canvasElement: any;
  canvasContext: any;

  loading: HTMLIonLoadingElement | null = null; // Inicializa loading como null

  constructor(private loadingCtrl: LoadingController, public toastCtrl: ToastController, private router: Router) {  this.scanResult = ''; this.loading = null; }

  ngAfterViewInit() {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  async startScan(){
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'enviroment'}
    });
    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.play();

    this.loading = await this.loadingCtrl.create({})
    await this.loading.present()

    requestAnimationFrame(this.scan.bind(this));
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading){
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }

    this.canvasElement.height = this.videoElement.videoHeight;
    this.canvasElement.width = this.videoElement.videoWidth;

    this.canvasContext.drawImage(
      this.videoElement,
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );

    const imageData = this.canvasContext.getImageData(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );

    const code = jsqr(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: 'dontInvert'
    });
    console.log('code:', code);

    if (code) {
      this.scanActive = false;
      this.scanResult = code.data;
      this.showQrToast(this.scanResult);

    } else {
      if (this.scanActive){
        requestAnimationFrame(this.scan.bind(this));
      }
      requestAnimationFrame(this.scan.bind(this));
    }
  }
  

  stopScan(){
    this.scanActive = false;
  }

  reset() {
    this.scanResult = '';
  }

  ngOnInit() {
    
  }

  async showQrToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: `Se ha escaneado correctamente el código QR`,
      position: 'top',
      duration: 15000,
      buttons: [
        {
          text: 'Ver detalles',
          handler: () => {
            const qrData = this.parseQrData(this.scanResult);
            this.iraAsistencia(qrData);
          }
        }
      ]
    });
    await toast.present();
  }

  parseQrData(qrText: string): any {
    const qrDataArray = qrText.split(', ');

    interface QrData {
      profesor: string;
      horaClase: string;
      sala: string;
      dia: string;
    }

    const qrData = {
      profesor: '',
      horaClase: '',
      sala: '',
      dia: ''
    };

    qrDataArray.forEach(item => {
      const [key, value] = item.split(': ');
      if (key && value) {
        qrData[key.toLowerCase() as keyof QrData] = value;
      }
    });

    return qrData;
  }

  iraAsistencia(qrData: any) {
    this.router.navigate(['/asistencia'], { queryParams: { qrData: JSON.stringify(qrData) } });
  }
}

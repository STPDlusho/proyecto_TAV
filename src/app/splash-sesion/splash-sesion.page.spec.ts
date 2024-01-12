import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashSesionPage } from './splash-sesion.page';

describe('SplashSesionPage', () => {
  let component: SplashSesionPage;
  let fixture: ComponentFixture<SplashSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SplashSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

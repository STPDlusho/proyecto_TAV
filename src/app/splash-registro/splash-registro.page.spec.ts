import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashRegistroPage } from './splash-registro.page';

describe('SplashRegistroPage', () => {
  let component: SplashRegistroPage;
  let fixture: ComponentFixture<SplashRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SplashRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

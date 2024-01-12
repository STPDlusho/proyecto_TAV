import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashRestaurarPage } from './splash-restaurar.page';

describe('SplashRestaurarPage', () => {
  let component: SplashRestaurarPage;
  let fixture: ComponentFixture<SplashRestaurarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SplashRestaurarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

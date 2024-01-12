import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurarPage } from './restaurar.page';

describe('RestaurarPage', () => {
  let component: RestaurarPage;
  let fixture: ComponentFixture<RestaurarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

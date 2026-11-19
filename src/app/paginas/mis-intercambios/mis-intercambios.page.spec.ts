import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisIntercambiosPage } from './mis-intercambios.page';

describe('MisIntercambiosPage', () => {
  let component: MisIntercambiosPage;
  let fixture: ComponentFixture<MisIntercambiosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MisIntercambiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

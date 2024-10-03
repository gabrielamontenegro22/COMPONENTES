import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonRouterPage } from './ion-router.page';

describe('IonRouterPage', () => {
  let component: IonRouterPage;
  let fixture: ComponentFixture<IonRouterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonRouterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

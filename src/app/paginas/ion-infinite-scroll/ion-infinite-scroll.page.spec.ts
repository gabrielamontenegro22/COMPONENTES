import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonInfiniteScrollPage } from './ion-infinite-scroll.page';

describe('IonInfiniteScrollPage', () => {
  let component: IonInfiniteScrollPage;
  let fixture: ComponentFixture<IonInfiniteScrollPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonInfiniteScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-refresher',
  templateUrl: './ion-refresher.page.html',
  styleUrls: ['./ion-refresher.page.scss'],
})
export class IonRefresherPage implements OnInit {

  constructor() { }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
  }

}

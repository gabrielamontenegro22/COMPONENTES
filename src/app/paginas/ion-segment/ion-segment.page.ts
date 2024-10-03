import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { barbell, basket, call, globe, heart, home, person, pin, star, trash } from 'ionicons/icons';

@Component({
  selector: 'app-ion-segment',
  templateUrl: './ion-segment.page.html',
  styleUrls: ['./ion-segment.page.scss'],
})
export class IonSegmentPage implements OnInit {

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ barbell, basket, call, globe, heart, home, person, pin, star, trash });
  }
  ngOnInit() {
  }

}

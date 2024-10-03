import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star } from 'ionicons/icons';


@Component({
  selector: 'app-ion-toolbar',
  templateUrl: './ion-toolbar.page.html',
  styleUrls: ['./ion-toolbar.page.scss'],
})
export class IonToolbarPage implements OnInit {

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ create, ellipsisHorizontal, ellipsisVertical, helpCircle, personCircle, search, star });
  }
  ngOnInit() {
  }

}

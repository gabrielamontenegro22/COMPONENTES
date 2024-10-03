import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';

@Component({
  selector: 'app-ion-input',
  templateUrl: './ion-input.page.html',
  styleUrls: ['./ion-input.page.scss'],
})
export class IonInputPage implements OnInit {

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ eye, lockClosed });
  }
  ngOnInit() {
  }

}

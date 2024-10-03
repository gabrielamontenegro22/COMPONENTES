import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons'; 

@Component({
  selector: 'app-ion-fab',
  templateUrl: './ion-fab.page.html',
  styleUrls: ['./ion-fab.page.scss'],
})
export class IonFabPage implements OnInit {

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ add });
  }
  ngOnInit() {
  }

}

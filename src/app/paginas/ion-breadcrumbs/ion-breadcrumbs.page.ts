import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { camera, film, flash, home } from 'ionicons/icons';

@Component({
  selector: 'app-ion-breadcrumbs',
  templateUrl: './ion-breadcrumbs.page.html',
  styleUrls: ['./ion-breadcrumbs.page.scss'],
})
export class IonBreadcrumbsPage implements OnInit {

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({ camera, film, flash, home });
  }
  ngOnInit() {
  }

}

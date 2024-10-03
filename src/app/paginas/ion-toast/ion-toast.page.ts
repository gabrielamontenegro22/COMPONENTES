import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-toast',
  templateUrl: './ion-toast.page.html',
  styleUrls: ['./ion-toast.page.scss'],
})
export class IonToastPage implements OnInit {

  constructor() { }

  public toastButtons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        console.log('More Info clicked');
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        console.log('Dismiss clicked');
      },
    },
  ];

  setRoleMessage(ev: CustomEvent) {  // Agrega la tipificación aquí
    const { role } = ev.detail;
    console.log(`Dismissed with role: ${role}`);
  }

  ngOnInit() {
  }

}

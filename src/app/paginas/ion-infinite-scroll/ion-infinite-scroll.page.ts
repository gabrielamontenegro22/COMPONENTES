import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-ion-infinite-scroll',
  templateUrl: './ion-infinite-scroll.page.html',
  styleUrls: ['./ion-infinite-scroll.page.scss'],
})
export class IonInfiniteScrollPage implements OnInit {
  items: string[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length; // Ahora tomamos directamente el valor de items.length
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i + 1}`); // Ajusta el índice para que el conteo empiece correctamente
    }
  }

  onIonInfinite(ev: Event) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}

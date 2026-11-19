import { Component } from '@angular/core';

import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular';

import { addIcons } from 'ionicons';

import { searchOutline, addCircleOutline, chatbubblesOutline, shirtOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  constructor() {
    addIcons({
      searchOutline,
      addCircleOutline,
      chatbubblesOutline,
      shirtOutline,
    });
  }
}

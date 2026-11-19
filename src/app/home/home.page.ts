import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, RouterLink],
})
export class HomePage {}

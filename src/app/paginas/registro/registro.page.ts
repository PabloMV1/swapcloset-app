
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonButton, IonCheckbox } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonButton, IonCheckbox, RouterLink],
})
export class RegistroPage {}


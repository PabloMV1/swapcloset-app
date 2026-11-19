import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonInput, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonInput, IonButton, RouterLink],
})
export class LoginPage {}

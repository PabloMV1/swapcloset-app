import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-crear-perfil',
  standalone: true,
  templateUrl: './crear-perfil.page.html',
  styleUrls: ['./crear-perfil.page.scss'],
  imports: [FormsModule, IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonButton],
})
export class CrearPerfilPage {
  nombre: string = '';
  estilo: string = '';

  intercambiar: boolean = true;
  prestamo: boolean = true;
  fotoSeleccionada: boolean = false;

  constructor(private router: Router) {}

  cambiarFoto(evento: Event) {
    const entrada = evento.target as HTMLInputElement;

    if (entrada.files && entrada.files.length > 0) {
      this.fotoSeleccionada = true;
    }
  }

  continuar() {
    this.router.navigate(['/explorar']);
  }
}

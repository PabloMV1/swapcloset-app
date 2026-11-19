
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonContent, IonInput, IonTextarea, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-publicar',
  standalone: true,
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
  imports: [FormsModule, IonContent, IonInput, IonTextarea, IonButton],
})
export class PublicarPage {
  titulo: string = '';
  descripcion: string = '';
  talla: string = '';
  estado: string = 'Como nuevo';
  tipo: string = 'Intercambio';

  foto: string = '';
  mensaje: string = '';

  seleccionarFoto(evento: Event) {
    const entrada = evento.target as HTMLInputElement;
    const archivo = entrada.files?.[0];

    if (archivo) {
      const lector = new FileReader();

      lector.onload = () => {
        this.foto = lector.result as string;
      };

      lector.readAsDataURL(archivo);
    }
  }

  publicar() {
    if (this.titulo.trim() === '' || this.descripcion.trim() === '' || this.talla === '') {
      this.mensaje = 'Completa todos los campos.';
      return;
    }

    if (this.foto === '') {
      this.mensaje = 'Selecciona una foto de la prenda.';
      return;
    }

    this.mensaje = 'Formulario completado. La prenda aún no se guarda.';
  }
}


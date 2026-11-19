import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

interface Mensaje {
  texto: string;
  mio: boolean;
}

@Component({
  selector: 'app-chat-detalle',
  standalone: true,
  templateUrl: './chat-detalle.page.html',
  styleUrls: ['./chat-detalle.page.scss'],
  imports: [FormsModule, IonContent],
})
export class ChatDetallePage {
  nombreUsuario: string = 'Sofía Pérez';
  inicial: string = 'S';
  prenda: string = 'Chaqueta Denim ↔ Top Corset Y2K';

  textoMensaje: string = '';

  mensajes: Mensaje[] = [];

  constructor(
    private router: Router,
    private ruta: ActivatedRoute,
  ) {
    const id = Number(this.ruta.snapshot.paramMap.get('id'));

    if (id === 2) {
      this.nombreUsuario = 'Mateo Díaz';
      this.inicial = 'M';
      this.prenda = 'Suéter Tejido Oversize';

      this.mensajes = [
        {
          texto: '¡Hola! ¿Me puedes prestar el suéter?',
          mio: true,
        },
        {
          texto: '¡Claro! Te lo dejo esta semana.',
          mio: false,
        },
        {
          texto: 'Ya lavé el suéter, mañana te lo llevo.',
          mio: false,
        },
      ];
    } else if (id === 3) {
      this.nombreUsuario = 'Laura Gómez';
      this.inicial = 'L';
      this.prenda = 'Vestido Flores Y2K';

      this.mensajes = [
        {
          texto: '¡Me encanta el vestido!',
          mio: true,
        },
        {
          texto: '¿Qué te parece si lo intercambiamos?',
          mio: false,
        },
        {
          texto: 'Gracias a ti, me quedó perfecto.',
          mio: false,
        },
      ];
    } else {
      this.mensajes = [
        {
          texto: '¡Hola Mariana! Me encanta tu Top Corset Y2K. ¿Lo buscas intercambiar?',
          mio: false,
        },
        {
          texto: '¡Sí! Está casi nuevo y combina genial con todo. ¿Te parece si hacemos el cambio mañana?',
          mio: true,
        },
        {
          texto: '¡Claro! ¿Nos vemos en la cafetería de la facultad de arquitectura al mediodía?',
          mio: false,
        },
      ];
    }
  }

  enviarMensaje() {
    const texto = this.textoMensaje.trim();

    if (texto === '') {
      return;
    }

    this.mensajes.push({
      texto: texto,
      mio: true,
    });

    this.textoMensaje = '';
  }

  volver() {
    this.router.navigate(['/tabs/chats']);
  }
}

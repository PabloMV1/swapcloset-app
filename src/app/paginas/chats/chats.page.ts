
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { IonContent, IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-chats',
  standalone: true,
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  imports: [FormsModule, IonContent, IonSearchbar],
})
export class ChatsPage {
  busqueda: string = '';

  chats = [
    {
      id: 1,
      nombre: 'Sofía Pérez',
      foto: 'https://i.pravatar.cc/150?img=47',
      estado: 'Pendiente',
      prenda: 'Chaqueta Denim ↔ Top Corset Y2K',
      mensaje: '¡Claro! ¿Nos vemos en la cafetería?',
      hora: '12:30',
    },
    {
      id: 2,
      nombre: 'Mateo Díaz',
      foto: 'https://i.pravatar.cc/150?img=12',
      estado: 'Préstamo',
      prenda: 'Suéter Tejido Oversize',
      mensaje: 'Ya lavé el suéter, mañana te lo llevo.',
      hora: 'Ayer',
    },
    {
      id: 3,
      nombre: 'Laura Gómez',
      foto: 'https://i.pravatar.cc/150?img=44',
      estado: 'Completado',
      prenda: 'Vestido Flores Y2K',
      mensaje: 'Gracias a ti, me quedó perfecto.',
      hora: 'Lunes',
    },
  ];

  constructor(private router: Router) {}

  get chatsFiltrados() {
    const texto = this.busqueda.toLowerCase();

    return this.chats.filter(
      (chat) => chat.nombre.toLowerCase().includes(texto) || chat.prenda.toLowerCase().includes(texto),
    );
  }

  abrirChat(id: number) {
    this.router.navigate(['/chat-detalle', id]);
  }
}


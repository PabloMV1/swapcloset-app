import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  imports: [IonContent, IonButton, RouterLink],
})
export class NotificacionesPage {
  recientes = [
    {
      icono: '♻',
      titulo: 'Nueva propuesta de trueque',
      descripcion: 'Sofía Pérez quiere intercambiar tu Top Corset Y2K.',
      fecha: 'Hace 5 minutos',
    },
    {
      icono: '🕒',
      titulo: 'Recordatorio de devolución',
      descripcion: 'Debes devolver la Falda Tableada mañana.',
      fecha: 'Hace 2 horas',
    },
  ];

  anteriores = [
    {
      icono: '⭐',
      titulo: '¡Trato completado!',
      descripcion: 'Ya puedes calificar tu intercambio con Mateo Díaz.',
      fecha: 'Ayer',
    },
    {
      icono: '💬',
      titulo: 'Mensaje nuevo',
      descripcion: 'Laura te envió un mensaje sobre el vestido.',
      fecha: 'Hace 2 días',
    },
  ];
}

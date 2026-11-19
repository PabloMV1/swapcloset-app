import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-closet',
  standalone: true,
  templateUrl: './closet.page.html',
  styleUrls: ['./closet.page.scss'],
  imports: [IonContent, IonButton, RouterLink],
})
export class ClosetPage {
  seccion: string = 'prendas';

  prendas = [
    {
      nombre: 'Top Corset Y2K',
      talla: 'S',
      tipo: 'Intercambio',
      imagen: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400',
    },
    {
      nombre: 'Suéter Oversize',
      talla: 'M',
      tipo: 'Préstamo',
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400',
    },
    {
      nombre: 'Chaqueta Vintage',
      talla: 'M',
      tipo: 'Intercambio',
      imagen: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=400',
    },
    {
      nombre: 'Vestido Casual',
      talla: 'S',
      tipo: 'Préstamo',
      imagen: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400',
    },
  ];

  tratos = [
    {
      prenda: 'Chaqueta Retro Denim',
      usuario: 'Sofía Pérez',
      tipo: 'Intercambio permanente',
      fecha: 'Entrega pendiente',
    },
    {
      prenda: 'Suéter Tejido Oversize',
      usuario: 'Mateo Díaz',
      tipo: 'Préstamo de 7 días',
      fecha: 'Devolución pendiente',
    },
  ];

  resenas = [
    {
      nombre: 'Sofía Pérez',
      comentario: '¡Increíble intercambio! La prenda estaba en perfecto estado.',
    },
    {
      nombre: 'Mateo Díaz',
      comentario: 'Muy buena experiencia. Todo fue rápido y sencillo.',
    },
    {
      nombre: 'Laura Gómez',
      comentario: 'Muy recomendable. El intercambio salió genial.',
    },
  ];
}

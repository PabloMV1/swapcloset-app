import { Component } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-intercambios',
  standalone: true,
  templateUrl: './mis-intercambios.page.html',
  styleUrls: ['./mis-intercambios.page.scss'],
  imports: [IonContent, IonButton],
})
export class MisIntercambiosPage {
  pestana: string = 'Activos';

  tratos = [
    {
      id: 1,
      prenda: 'Chaqueta Retro Denim',
      usuario: 'Sofía Pérez',
      tipo: 'Intercambio permanente',
      fecha: 'Entrega: mañana',
      estado: 'Activos',
      accion: 'Confirmar lugar de encuentro',
      imagen: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=300',
    },
    {
      id: 2,
      prenda: 'Suéter Tejido Oversize',
      usuario: 'Mateo Díaz',
      tipo: 'Préstamo (7 días)',
      fecha: 'Devolución: 24 Nov',
      estado: 'Activos',
      accion: 'Ver detalles de entrega',
      imagen: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300',
    },
    {
      id: 3,
      prenda: 'Vestido Flores Y2K',
      usuario: 'Laura Gómez',
      tipo: 'Intercambio',
      fecha: 'Esperando respuesta',
      estado: 'Pendientes',
      accion: 'Ver solicitud',
      imagen: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=300',
    },
    {
      id: 4,
      prenda: 'Gafas Retro',
      usuario: 'Sofía Pérez',
      tipo: 'Intercambio',
      fecha: 'Completado',
      estado: 'Historial',
      accion: 'Ver conversación',
      imagen: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300',
    },
    {
      id: 5,
      prenda: 'Sudadera Vintage',
      usuario: 'Mateo Díaz',
      tipo: 'Préstamo',
      fecha: 'Devuelto',
      estado: 'Historial',
      accion: 'Ver conversación',
      imagen: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300',
    },
    {
      id: 6,
      prenda: 'Falda Tablas',
      usuario: 'Laura Gómez',
      tipo: 'Intercambio',
      fecha: 'Completado',
      estado: 'Historial',
      accion: 'Ver conversación',
      imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=300',
    },
  ];

  constructor(private router: Router) {}

  get tratosFiltrados() {
    return this.tratos.filter((trato) => trato.estado === this.pestana);
  }

  verTrato(id: number) {
    if (id === 1 || id === 4) {
      this.router.navigate(['/chat-detalle', 1]);
    } else if (id === 2 || id === 5) {
      this.router.navigate(['/chat-detalle', 2]);
    } else {
      this.router.navigate(['/chat-detalle', 3]);
    }
  }
}

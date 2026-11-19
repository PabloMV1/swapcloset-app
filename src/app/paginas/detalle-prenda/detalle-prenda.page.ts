
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-detalle-prenda',
  standalone: true,
  templateUrl: './detalle-prenda.page.html',
  styleUrls: ['./detalle-prenda.page.scss'],
  imports: [IonContent, IonButton],
})
export class DetallePrendaPage {
  prenda = {
    nombre: 'Chaqueta Denim Retro',
    talla: 'M',
    tipo: 'Intercambio',
    estado: 'Como nueva',
    descripcion:
      'Chaqueta de mezclilla súper gruesa comprada en un mercado vintage de Berlín. Estilo Y2K clásico, queda genial un poco holgada. ¡Perfecta para días de campus de otoño!',
    imagen: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=700',
  };

  constructor(
    private router: Router,
    private ruta: ActivatedRoute,
  ) {
    const id = Number(this.ruta.snapshot.paramMap.get('id'));

    if (id === 2) {
      this.prenda = {
        nombre: 'Vestido Flores Y2K',
        talla: 'S',
        tipo: 'Préstamo',
        estado: 'Buen estado',
        descripcion: 'Vestido de flores con estilo Y2K. Perfecto para una fiesta, una salida o un evento especial.',
        imagen: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=700',
      };
    }
  }

  volver() {
    this.router.navigate(['/tabs/explorar']);
  }

  solicitar() {
    this.router.navigate(['/mis-intercambios']);
  }

  abrirChat() {
    this.router.navigate(['/chat-detalle', 1]);
  }
}


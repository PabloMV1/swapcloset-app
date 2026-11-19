
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  standalone: true,
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  imports: [IonContent, IonButton, RouterLink],
})
export class AjustesPage {
  apartado: string = '';
  descripcion: string = '';

  constructor(private router: Router) {}

  seleccionar(opcion: string) {
    this.apartado = opcion;

    if (opcion === 'Cuenta') {
      this.descripcion = 'La configuración real de la cuenta se añadirá en una próxima entrega.';
    } else if (opcion === 'Privacidad') {
      this.descripcion = 'Aquí podrás elegir quién puede ver tu perfil y tus prendas.';
    } else if (opcion === 'Centro de ayuda') {
      this.descripcion =
        'Para intercambiar ropa, contacta con otro estudiante y acuerda un lugar seguro dentro del campus.';
    } else {
      this.descripcion =
        'Respeta a los demás usuarios, describe las prendas correctamente y cumple los acuerdos de intercambio.';
    }
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}


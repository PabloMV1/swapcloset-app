
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonChip } from '@ionic/angular';

@Component({
  selector: 'app-explorar',
  standalone: true,
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
  imports: [FormsModule, IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar, IonChip],
})
export class ExplorarPage {
  busqueda: string = '';
  filtro: string = 'Todo';

  categorias = ['Todo', 'Casual', 'Formal', 'Accesorios'];

  prendas = [
    {
      id: 1,
      nombre: 'Chaqueta Denim Retro',
      talla: 'M',
      tipo: 'Intercambio',
      categoria: 'Casual',
      imagen: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=500',
    },
    {
      id: 2,
      nombre: 'Vestido Flores',
      talla: 'S',
      tipo: 'Préstamo',
      categoria: 'Formal',
      imagen: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500',
    },
  ];

  constructor(private router: Router) {}

  get prendasFiltradas() {
    const texto = this.busqueda.toLowerCase();

    return this.prendas.filter((prenda) => {
      const coincideNombre = prenda.nombre.toLowerCase().includes(texto);

      const coincideCategoria = this.filtro === 'Todo' || prenda.categoria === this.filtro;

      return coincideNombre && coincideCategoria;
    });
  }

  abrirPrenda(id: number) {
    this.router.navigate(['/detalle-prenda', id]);
  }
}


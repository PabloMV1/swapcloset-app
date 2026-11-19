import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'registro',
    loadComponent: () => import('./paginas/registro/registro.page').then((m) => m.RegistroPage),
  },
  {
    path: 'crear-perfil',
    loadComponent: () => import('./paginas/crear-perfil/crear-perfil.page').then((m) => m.CrearPerfilPage),
  },
  {
    path: 'chat-detalle/:id',
    loadComponent: () => import('./paginas/chat-detalle/chat-detalle.page').then((m) => m.ChatDetallePage),
  },
  {
    path: 'detalle-prenda/:id',
    loadComponent: () => import('./paginas/detalle-prenda/detalle-prenda.page').then((m) => m.DetallePrendaPage),
  },
  {
    path: 'mis-intercambios',
    loadComponent: () => import('./paginas/mis-intercambios/mis-intercambios.page').then((m) => m.MisIntercambiosPage),
  },
  {
    path: 'notificaciones',
    loadComponent: () => import('./paginas/notificaciones/notificaciones.page').then((m) => m.NotificacionesPage),
  },
  {
    path: 'ajustes',
    loadComponent: () => import('./paginas/ajustes/ajustes.page').then((m) => m.AjustesPage),
  },
  {
    path: 'explorar',
    redirectTo: 'tabs/explorar',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () => import('./paginas/tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: '',
        redirectTo: 'explorar',
        pathMatch: 'full',
      },
      {
        path: 'explorar',
        loadComponent: () => import('./paginas/explorar/explorar.page').then((m) => m.ExplorarPage),
      },
      {
        path: 'publicar',
        loadComponent: () => import('./paginas/publicar/publicar.page').then((m) => m.PublicarPage),
      },
      {
        path: 'chats',
        loadComponent: () => import('./paginas/chats/chats.page').then((m) => m.ChatsPage),
      },
      {
        path: 'closet',
        loadComponent: () => import('./paginas/closet/closet.page').then((m) => m.ClosetPage),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';
import { canActivate } from './auth.guard';
import { SocksAdminComponent } from './socks-admin.component';
import { SockEditComponent } from './sock-edit.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: SocksAdminComponent },
      { path: 'socks/new', component: SockEditComponent },
      { path: 'socks/:id', component: SockEditComponent },
    ]
  },
];

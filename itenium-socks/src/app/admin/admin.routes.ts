import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';
import { canActivate } from './auth.guard';
import { SocksAdminComponent } from './socks-admin.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AdminComponent,
    canActivateChild: [canActivate],
    children: [
      { path: '', component: SocksAdminComponent }
    ]
  },
];

import { Routes } from '@angular/router';
import { WhyUsComponent } from './pages/why-us.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ShopComponent } from './socks/shop.component';
import { SockComponent } from './socks/sock.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'why-us', component: WhyUsComponent, title: 'Why Us | Toe-tally Amazing' },
      { path: 'socks', component: ShopComponent },
      { path: 'socks/:id', component: SockComponent },
    ]
  },
  {
    path: 'admin',
    // ATTN: it's also possible to load the routes directly instead!
    loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)
  },
];

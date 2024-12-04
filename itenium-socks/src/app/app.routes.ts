import { Routes } from '@angular/router';
import { WhyUsComponent } from './pages/why-us.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ShopComponent } from './socks/shop.component';
import { SockComponent } from './socks/sock.component';
import { NewTemplateComponent } from './new-template/new-template.component';
import { OldTemplateComponent } from './new-template/old-template.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'why-us', component: WhyUsComponent },
      { path: 'socks', component: ShopComponent },
      { path: 'socks/:id', component: SockComponent },
      { path: 'old-template', component: OldTemplateComponent },
      { path: 'new-template', component: NewTemplateComponent },
    ]
  },
  {
    path: 'admin',
    // ATTN: it's also possible to load the routes directly instead!
    loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)
  },
];

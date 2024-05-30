import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';
import { LoginComponent } from './login.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { SocksAdminComponent } from './socks-admin.component';
import { SockEditComponent } from './sock-edit.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    SocksAdminComponent,
    SockEditComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
  ],
})
export class AdminModule { }

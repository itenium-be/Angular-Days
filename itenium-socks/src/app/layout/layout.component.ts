import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {}

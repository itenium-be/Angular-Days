import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgToastModule, ToasterPosition} from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgToastModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  ToasterPosition = ToasterPosition;
}

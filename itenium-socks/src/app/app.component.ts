import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {registerLocaleData} from "@angular/common";
import localeNlBe from '@angular/common/locales/nl-BE';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    registerLocaleData(localeNlBe);
  }
}

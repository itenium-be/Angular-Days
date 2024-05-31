import {Component, LOCALE_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'nl-BE' }],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor() {
    registerLocaleData(localeNlBe, 'nl-BE');
  }
}

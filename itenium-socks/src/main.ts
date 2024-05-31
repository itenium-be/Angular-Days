import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import localeNlBe from '@angular/common/locales/nl-BE';
import localeNlBeExtra from '@angular/common/locales/extra/nl-BE'

registerLocaleData(localeNlBe, localeNlBeExtra);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

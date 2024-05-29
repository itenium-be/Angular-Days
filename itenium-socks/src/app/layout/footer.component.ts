import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  toTranslate = $localize`${this.currentYear} All Rights Reserved.`;
  withId = $localize`:@@translation-id:default translation`;
}

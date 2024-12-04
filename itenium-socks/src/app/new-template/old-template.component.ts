import { AsyncPipe, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { SectionComponent } from './section.component';
import { of } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-old-template',
  imports: [
    SectionComponent,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './old-template.component.html',
  styles: `
    img {
      max-width: 200px;
    }
`
})
export class OldTemplateComponent {
  randomNumber = Math.floor(Math.random() * 10);
  randomBool = Math.random() > 0.5;
  elements = ['❤️', '🥳', '🍀', '✨', '🌈', '🎉'];
  randomObs$ = of(Math.floor(Math.random() * 10));
}

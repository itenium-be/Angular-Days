import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}

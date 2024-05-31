import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './why-us.component.html'
})
export class WhyUsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Why Us | Toe-tally Amazing");
  }
}

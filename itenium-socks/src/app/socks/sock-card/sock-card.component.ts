import { Component, Input } from '@angular/core';
import { Sock } from '../sock.model';

@Component({
  selector: 'app-sock-card',
  standalone: true,
  imports: [],
  templateUrl: './sock-card.component.html'
})
export class SockCardComponent {
  @Input() sock!: Sock;
}

import {Component, Input} from '@angular/core';
import { Sock } from '../socks/sock.model'; // adjust the import path to your Sock model
import {RouterLink} from '@angular/router'; // new import

@Component({
  selector: 'app-sock-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sock-card.component.html',
  styleUrl: './sock-card.component.scss'
})
export class SockCardComponent {
  @Input() sock!: Sock;
}

import { Component, Input } from '@angular/core';
import { Sock } from '../socks/sock.model';

@Component({
  selector: 'app-sock-layout',
  standalone: true,
  imports: [],
  templateUrl: './sock-layout.component.html',
  styleUrl: './sock-layout.component.scss'
})
export class SockLayoutComponent {
    @Input() sockModel! : Sock;
}

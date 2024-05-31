import { Component, Input } from '@angular/core';
import { Sock } from '../socks/sock.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-sock-layout',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './sock-layout.component.html'
})

export class SockLayoutComponent {
    @Input() sock! : Sock;
}

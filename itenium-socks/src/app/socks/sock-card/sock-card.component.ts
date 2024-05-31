import { Component, Input} from '@angular/core';
import {Sock} from '../sock.model';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-sock-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './sock-card.component.html'
})
export class SockCardComponent {
  @Input({required:true}) sock!: Sock;

}

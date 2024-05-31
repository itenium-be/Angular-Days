import {Component, LOCALE_ID} from '@angular/core';
import { SocksService } from './socks.service';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import {AsyncPipe, CurrencyPipe, NgFor} from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor, AsyncPipe, CurrencyPipe],
  templateUrl: './shop.component.html'
})
export class ShopComponent {
  socks$!: Observable<Sock[]>;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    this.socks$ = this.socksService.get();
  }
}

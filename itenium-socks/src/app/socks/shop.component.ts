import { Component } from '@angular/core';
import { SocksService } from './socks.service';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import { AsyncPipe, NgFor } from '@angular/common';
import { PricePipe } from "../pipes/price.pipe";

@Component({
  selector: 'app-shop',
  standalone: true,
  templateUrl: './shop.component.html',
  imports: [NgFor, AsyncPipe, PricePipe]
})
export class ShopComponent {
  socks$!: Observable<Sock[]>;

  constructor(private socksService: SocksService) { }

  ngOnInit(): void {
    this.socks$ = this.socksService.get();
  }
}

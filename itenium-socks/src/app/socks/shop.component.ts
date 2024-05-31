import { Component } from '@angular/core';
import { SocksService } from './socks.service';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './shop.component.html'
})
export class ShopComponent {
  socks$!: Observable<Sock[]>;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    this.socks$ = this.socksService.get();
  }

  errImage(e: any): void {
    e.target.src = "sock-images/Socks-404.png";
  }
}

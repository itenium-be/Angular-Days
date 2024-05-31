import { Component } from '@angular/core';
import { SocksService } from './socks.service';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import { AsyncPipe } from '@angular/common';
import { SockLayoutComponent } from '../sock-layout/sock-layout.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [AsyncPipe, SockLayoutComponent],
  templateUrl: './shop.component.html'
})
export class ShopComponent {
  socks$!: Observable<Sock[]>;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    this.socks$ = this.socksService.get();
  }
}

import { Component } from '@angular/core';
import { SocksService } from '@services/socks.service';
import { Observable } from 'rxjs';
import { Sock } from '@models/sock.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './shop.component.html'
})
export class ShopComponent {
  socks$!: Observable<Sock[]>;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    this.socks$ = this.socksService.get();
  }
}

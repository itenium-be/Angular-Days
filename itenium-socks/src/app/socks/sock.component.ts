import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import { SocksService } from './socks.service';
import { AsyncPipe, NgIf, TitleCasePipe } from '@angular/common';
import { PricePipe } from "../pipes/price.pipe";

@Component({
    selector: 'app-sock',
    standalone: true,
    templateUrl: './sock.component.html',
    imports: [NgIf, AsyncPipe, TitleCasePipe, PricePipe]
})
export class SockComponent {
  sock$!: Observable<Sock>;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    // HACK: This is not the way to get the sockId!!
    const sockId = +window.location.pathname.split('/')[2];
    this.sock$ = this.socksService.getById(sockId);
  }

  buy(): void {
    const sockId = +window.location.pathname.split('/')[2];
    this.socksService.buySocks(sockId).subscribe();
  }

  addReview(): void {
    // TODO: Bind the form!
    const sockId = +window.location.pathname.split('/')[2];
    this.socksService.addReview(sockId, 'my review', 5).subscribe();
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import { SocksService } from './socks.service';
import { AsyncPipe, NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-sock',
  standalone: true,
  imports: [NgIf, AsyncPipe, TitleCasePipe],
  templateUrl: './sock.component.html'
})
export class SockComponent {
  sock$!: Observable<Sock>;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    const sockId = +window.location.pathname.split('/')[2];
    this.sock$ = this.socksService.getById(sockId);
  }

  buy(): void {
    const sockId = +window.location.pathname.split('/')[2];
    this.socksService.buySocks(sockId).subscribe();
  }
}

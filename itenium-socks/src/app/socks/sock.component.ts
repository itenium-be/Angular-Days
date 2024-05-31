import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sock } from '@models/sock.model';
import { SocksService } from '@services/socks.service';
import { AsyncPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-sock',
  standalone: true,
  imports: [AsyncPipe, TitleCasePipe],
  templateUrl: './sock.component.html'
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

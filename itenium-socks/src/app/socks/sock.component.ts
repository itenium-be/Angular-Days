import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import { SocksService } from './socks.service';
import { AsyncPipe, NgIf, TitleCasePipe } from '@angular/common';
import { SockReviewsComponent } from "./sock-reviews.component";

@Component({
  selector: 'app-sock',
  standalone: true,
  imports: [NgIf, AsyncPipe, TitleCasePipe, SockReviewsComponent],
  templateUrl: './sock.component.html'
})
export class SockComponent {
  sock$!: Observable<Sock>;
  sockId: number | undefined;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    // HACK: This is not the way to get the sockId!!
    this.sockId = +window.location.pathname.split('/')[2];
    this.sock$ = this.socksService.getById(this.sockId);
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

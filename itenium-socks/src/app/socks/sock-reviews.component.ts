import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SocksService } from './socks.service';
import { Review } from './sock.model';
import { TimeagoModule } from 'ngx-timeago';

@Component({
  selector: 'app-sock-reviews',
  standalone: true,
  imports: [AsyncPipe, TimeagoModule ],
  templateUrl: './sock-reviews.component.html'
})
export class SockReviewsComponent {
  reviews$!: Observable<Review[]>;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    this.reviews$ = this.socksService.getLatestReviews();
  }
}

import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SocksService } from './socks.service';
import { Review } from './sock.model';
import { TimeAgoPipe } from '../time-ago.pipe'; // corrected import statement

@Component({
  selector: 'app-sock-reviews',
  standalone: true,
  imports: [NgFor, AsyncPipe, TimeAgoPipe], // corrected imports array
  templateUrl: './sock-reviews.component.html',
  providers: [TimeAgoPipe] // corrected providers array
})
export class SockReviewsComponent {
  reviews$!: Observable<Review[]>;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    this.reviews$ = this.socksService.getLatestReviews();
  }
}

import { AsyncPipe, NgFor } from '@angular/common';
import {Component, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { SocksService } from './socks.service';
import { Review } from './sock.model';

@Component({
  selector: 'app-sock-reviews',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './sock-reviews.component.html'
})
export class SockReviewsComponent {
  @Input() sockId!: number | undefined;
  reviews$!: Observable<Review[]>;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    if(this.sockId){
      this.reviews$ = this.socksService.getSockReviews(this.sockId);
    } else {
      this.reviews$ = this.socksService.getLatestReviews();
    }
  }
}

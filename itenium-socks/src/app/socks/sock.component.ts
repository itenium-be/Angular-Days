import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import { SocksService } from './socks.service';
import { AsyncPipe, NgIf, TitleCasePipe } from '@angular/common';
import { EuroFormatPipe } from '../euro-format.pipe';
import {FormsModule} from "@angular/forms"; // adjust the path as needed

@Component({
  selector: 'app-sock',
  standalone: true,
  imports: [NgIf, AsyncPipe, TitleCasePipe, EuroFormatPipe, FormsModule],
  templateUrl: './sock.component.html',
  providers: [EuroFormatPipe] // add EuroFormatPipe to providers
})
export class SockComponent {
  sock$!: Observable<Sock>;
  reviewText = '';
  reviewRating: 1 | 2 | 3 | 4 | 5 = 5;

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
    const sockId = +window.location.pathname.split('/')[2];
    const added = new Date(); // current date and time
    const addedString = added.toISOString();
    this.socksService.addReview(sockId, this.reviewText, this.reviewRating).subscribe();
  }
}

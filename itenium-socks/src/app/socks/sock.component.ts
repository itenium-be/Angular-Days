import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import { SocksService } from './socks.service';
import { AsyncPipe, NgIf, TitleCasePipe } from '@angular/common';
import { EuroFormatPipe } from '../euro-format.pipe'; // adjust the path as needed

@Component({
  selector: 'app-sock',
  standalone: true,
  imports: [NgIf, AsyncPipe, TitleCasePipe, EuroFormatPipe],
  templateUrl: './sock.component.html',
  providers: [EuroFormatPipe] // add EuroFormatPipe to providers
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

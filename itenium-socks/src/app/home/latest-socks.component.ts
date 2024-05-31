import { Component, OnInit } from '@angular/core';
import { SocksService } from '../socks/socks.service';
import { Observable } from 'rxjs';
import { Sock } from '../socks/sock.model';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SockLayoutComponent } from '../sock-layout/sock-layout.component';

@Component({
  selector: 'app-latest-socks',
  standalone: true,
  imports: [AsyncPipe, RouterLink, SockLayoutComponent],
  templateUrl: './latest-socks.component.html'
})
export class LatestSocksComponent implements OnInit {
  socks$!: Observable<Sock[]>;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    this.socks$ = this.socksService.getLatest();
  }
}

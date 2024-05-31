import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero.component';
import { GiftsComponent } from './gifts/gifts.component';
import { FooterComponent } from '../layout/footer.component';
import { SockReviewsComponent } from '../socks/sock-reviews.component';
import { LatestSocksComponent } from './latest-socks/latest-socks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    GiftsComponent,
    FooterComponent,
    SockReviewsComponent,
    LatestSocksComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}

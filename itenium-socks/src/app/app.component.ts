import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './home/hero.component';
import { GiftsComponent } from './home/gifts.component';
import { FooterComponent } from './layout/footer.component';
import { SockReviewsComponent } from './socks/sock-reviews.component';
import { LatestSocksComponent } from './home/latest-socks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    GiftsComponent,
    FooterComponent,
    SockReviewsComponent,
    LatestSocksComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import { SocksService } from './socks.service';
import { AsyncPipe, NgIf, TitleCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-sock',
  standalone: true,
  imports: [NgIf, AsyncPipe, TitleCasePipe],
  templateUrl: './sock.component.html'
})
export class SockComponent implements OnInit {
  sockId: number = -1;
  sock$!: Observable<Sock>;

  constructor(private socksService: SocksService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.sockId = this.route.snapshot.params['id'];
      this.sock$ = this.socksService.getById(this.sockId);
    })
  }

  buy(): void {
    this.socksService.buySocks(this.sockId).subscribe();
  }

  addReview(): void {
    // TODO: Bind the form!
    this.socksService.addReview(this.sockId, 'my review', 5).subscribe();
  }

  goToNextSock() {
    let nextSockId = +this.sockId + 1;
    this.router.navigate(["/socks", nextSockId]);
  }
}

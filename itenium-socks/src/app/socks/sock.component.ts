import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import { SocksService } from './socks.service';
import { AsyncPipe, NgIf, TitleCasePipe } from '@angular/common';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-sock',
  standalone: true,
  imports: [NgIf, AsyncPipe, TitleCasePipe],
  templateUrl: './sock.component.html',
  styleUrl: './sock.component.css'
})
export class SockComponent {
  sock$!: Observable<Sock>;

  constructor(private socksService: SocksService,
    private ngToastService: NgToastService
  ) {}

  ngOnInit(): void {
    // HACK: This is not the way to get the sockId!!
    const sockId = +window.location.pathname.split('/')[2];
    this.sock$ = this.socksService.getById(sockId);
  }

  
  buy(): void {
    const sockId = +window.location.pathname.split('/')[2];
    const btn = <HTMLInputElement> document.getElementById("buyBtn");
    btn.disabled = true;
    let observer = {
      next: (value:any) => {
        btn.disabled = false;
        console.log("Bought!");
        this.ngToastService.success("Bought a pair of socks!", "Congrats!", 5000);
      },
      error: (err:any) => {
        btn.disabled = false;
        console.log("Uh oh!");
        this.ngToastService.danger("Whoops, something went wrong...", "Uh oh!", 5000);
      },
    };
    this.socksService.buySocks(sockId).subscribe( observer );
  }

  addReview(): void {
    // TODO: Bind the form!
    const sockId = +window.location.pathname.split('/')[2];
    this.socksService.addReview(sockId, 'my review', 5).subscribe();
  }
}

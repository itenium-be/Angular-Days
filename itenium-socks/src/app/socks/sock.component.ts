import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import { SocksService } from './socks.service';
import { AsyncPipe, NgIf, TitleCasePipe } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-sock',
  standalone: true,
  imports: [NgIf, AsyncPipe, TitleCasePipe, ReactiveFormsModule],
  templateUrl: './sock.component.html',
})
export class SockComponent {
  sock$!: Observable<Sock>;
  reviewForm: FormGroup;
  formError: boolean = false;
  apiError: boolean = false;
  apiSuccess: boolean = false;

  constructor(private socksService: SocksService) {
    this.reviewForm = new FormGroup({
      'review': new FormControl(null, Validators.required),
      'rating': new FormControl('1')
    });
  }

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
    this.resetNotifications();
    if (this.reviewForm.invalid) {
      this.formError = true;
    } else {
      const sockId = +window.location.pathname.split('/')[2];
      this.socksService.addReview(sockId, this.reviewForm.get('review')?.value, this.reviewForm.get('rating')?.value).subscribe(
        () => {
          this.reviewForm.reset();
          this.reviewForm.get('rating')?.setValue('1');
          this.apiSuccess = true;
        },
        (error) => {
          this.apiError = true;
        });
    }
  }

  resetNotifications(){
    this.apiError = false;
    this.apiSuccess = false;
    this.formError = false;
  }
}

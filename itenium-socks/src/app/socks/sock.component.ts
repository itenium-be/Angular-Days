import {Component, Input} from '@angular/core';
import {Observable, catchError, map, tap} from 'rxjs';
import {Sock} from './sock.model';
import {SocksService} from './socks.service';
import {AsyncPipe, NgIf, TitleCasePipe} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';
import {BankAccountModalComponent} from "../components/bank-account-modal/bank-account-modal.component";
import {
  MatDialog
} from '@angular/material/dialog';
import {TrialModalDialog} from '../components/trial-modal/trial-modal.component';

@Component({
  selector: 'app-sock',
  standalone: true,
  templateUrl: './sock.component.html',
  imports: [NgIf, AsyncPipe, TitleCasePipe, BankAccountModalComponent]
})
export class SockComponent {

  sock$!: Observable<Sock>;
  showAlert: boolean = false;
  showModal = false;
  @Input() closedModal = false;

  constructor(private socksService: SocksService, 
    private snackBar: MatSnackBar, 
    private route: ActivatedRoute, 
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => {
        const sockId = params['id'];
        this.sock$ = this.socksService.getById(sockId);
      })
    ).subscribe();
  }

  buy(id: number): void {
    this.dialog.open(BankAccountModalComponent);
  }

  doBuy(id: number) {
    this.socksService.buySocks(id)
      .pipe(
        tap(response => {

          let snackMessage = 'Success! The socks are yours';
          if (response.msg !== 'Socks bought!') {
            snackMessage = 'Darn, no socks :('
          }
          this.displayAlert(snackMessage);
        }),
      )
      .subscribe();
  }

  toggleModal() {
    this.showModal = false;
  }

  displayAlert(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 3000
    });
  }

  addReview(): void {
    // TODO: Bind the form!
    const sockId = +window.location.pathname.split('/')[2];
    this.socksService.addReview(sockId, 'my review', 5).subscribe();
  }
}

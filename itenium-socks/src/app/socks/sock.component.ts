import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';
import { SocksService } from './socks.service';
import { AsyncPipe, NgIf, TitleCasePipe, CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-sock',
  standalone: true,
  imports: [NgIf, AsyncPipe, TitleCasePipe, ModalComponent, CommonModule],
  templateUrl: './sock.component.html',
  styleUrls: ['./sock.component.scss']
})
export class SockComponent {
  sock$!: Observable<Sock>;
  showModal = false;
  showAlert = false;
  alertMessage = '';
  alertType = '';

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    // HACK: This is not the way to get the sockId!!
    const sockId = +window.location.pathname.split('/')[2];
    this.sock$ = this.socksService.getById(sockId);
  }

  buy(): void {
    this.showModal = true;

  }

  onCloseModal() {
    this.showModal = false;
  }

  onConfirmPurchase() {
    const sockId = +window.location.pathname.split('/')[2];
    this.socksService.buySocks(sockId).subscribe();
    this.showModal = false;
    this.showAlertMessage('Purchase successful!', 'success');
  }

  showAlertMessage(message: string, type: string) {
    this.alertMessage = message;
    this.alertType = type;
    this.showAlert = true;
    setTimeout(() => this.showAlert = false, 3000);
  }

  addReview(): void {
    // TODO: Bind the form!
    const sockId = +window.location.pathname.split('/')[2];
    this.socksService.addReview(sockId, 'my review', 5).subscribe();
  }
}

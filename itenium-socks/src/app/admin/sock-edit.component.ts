import { Component } from '@angular/core';
import { SocksService } from '@services/socks.service';
import { Observable } from 'rxjs';
import { Sock } from '@models/sock.model';
import { SocksAdminService } from './socks-admin.service';

@Component({
  selector: 'app-sock-edit',
  templateUrl: './sock-edit.component.html',
  styles: ``
})
export class SockEditComponent {
  sock$!: Observable<Sock>;

  constructor(
    private socksService: SocksService,
    private socksAdminService: SocksAdminService,
  ) {}

  ngOnInit(): void {
    // TODO: hardocded id "1"??
    this.sock$ = this.socksService.getById(1);
  }
}

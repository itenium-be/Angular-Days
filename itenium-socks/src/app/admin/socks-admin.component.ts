import { Component } from '@angular/core';
import { SocksService } from '@services/socks.service';
import { Observable } from 'rxjs';
import { Sock } from '@models/sock.model';
import { SocksAdminService } from './socks-admin.service';

@Component({
  selector: 'app-socks-admin',
  templateUrl: './socks-admin.component.html',
  styles: `
    td > * {
      cursor: pointer;

      &:not(:first-child) {
        margin-left: 8px;
      }

      &.fa-trash {
        color: tomato;
      }

      .fa-edit {
        color: #89CFF0;
      }
    }

    a.add-sock {
      font-size: 16px;
      display: inline-block;
      padding: 6px 30px;
      float: right;
      background-color: #f16179;
      color: #ffffff;
      border: 1px solid #f16179;
      border-radius: 5px;
      -webkit-transition: all .3s;
      transition: all .3s;
      text-decoration: none;
      cursor: pointer;
    }

    a.add-sock:hover {
      background-color: transparent;
      color: #f16179;
    }
  `
})
export class SocksAdminComponent {
  socks$!: Observable<Sock[]>;

  constructor(
    private socksService: SocksService,
    private socksAdminService: SocksAdminService,
  ) {}

  ngOnInit(): void {
    this.socks$ = this.socksService.get();
  }

  deleteSock(sockId: number): void {
    this.socksAdminService.deleteSock(sockId).subscribe();
  }
}

import {Component, OnInit} from '@angular/core';
import { SocksService } from './socks.service';
import {last, Observable} from 'rxjs';
import { Sock } from './sock.model';
import { AsyncPipe, NgFor } from '@angular/common';
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor, AsyncPipe, MatPaginator],
  templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit{
  totalItems = 100;
  pageSize = 8;
  currentPage = 0;
  socks$!: Observable<Sock[]>;
  socks: Sock[] = [];

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    this.socks$ = this.socksService.get();
    this.socks$.pipe(last())
      .subscribe(allSocks => {
        this.socks = this.getSocksPage(allSocks, this.currentPage, this.pageSize)
        this.totalItems = allSocks.length
      })
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.socks$.pipe(last())
      .subscribe(allSocks => {
        this.socks = this.getSocksPage(allSocks, this.currentPage, this.pageSize)
      })
  }

  private getSocksPage(allSocks: Sock[], currentPage: number, pageSize: number) {
    const index = currentPage * pageSize
    return allSocks.slice(index, index + pageSize);
  }
}

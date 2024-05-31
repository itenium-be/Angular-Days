import {Component} from '@angular/core';
import {SocksService} from './socks.service';
import {map, Observable, of} from 'rxjs';
import {Sock} from './sock.model';
import {AsyncPipe, NgFor} from '@angular/common';
import {MatPaginatorModule, PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor, AsyncPipe, MatPaginatorModule],
  templateUrl: './shop.component.html'
})
export class ShopComponent {
  socks$!: Observable<Sock[]>;
  socksPaginated$!: Observable<Sock[]>;
  pageSize = 10;
  pageIndex = 0;

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    this.socks$ = this.socksService.get();
    this.paginate(this.pageIndex, this.pageSize);
  }

  handlePage(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    this.paginate(this.pageIndex, this.pageSize);
  }

  paginate(pageIndex: number, pageSize: number) {
    this.socks$.subscribe(socks => {

      const start = this.pageIndex * this.pageSize;
      const end = start + this.pageSize;

      this.socksPaginated$ = of(socks.slice(start, end));
    });
    this.sortSocks();
  }

  handleSearch(event: any) {
    const search = event.target.value;
    this.socksPaginated$ = this.socksService.get().pipe(
      map(socks => socks.filter(sock => sock.name.toLowerCase().startsWith(search.toLowerCase())))
    );
    this.sortSocks();
  }

  sortSocks() {
    this.socksPaginated$.subscribe(socks => {
      socks.sort((a, b) => {
        if (a.name.toLowerCase() === b.name.toLowerCase()) {
          // If names are equal, sort by price
          return a.price - b.price;
        }
        // Otherwise, sort by name
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      });
    });
  }
}

import { Component } from '@angular/core';
import { SocksService } from './socks.service';
import { Observable,BehaviorSubject, combineLatest  } from 'rxjs';
import { Sock } from './sock.model';
import { AsyncPipe, NgFor } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { map } from 'rxjs/operators';
import { PricePipe } from '../price.pipe';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor, AsyncPipe, NgxPaginationModule, PricePipe],
  templateUrl: './shop.component.html'
})
export class ShopComponent {
  socks$!: Observable<Sock[]>;
  filteredSocks$!: Observable<Sock[]>;

  public nameFilterSubject = new BehaviorSubject<string>('');
  public colorFilterSubject = new BehaviorSubject<string>('');
  public sortBySubject = new BehaviorSubject<string>('name');
  public currentPageSubject = new BehaviorSubject<number>(1);
  public pageSize = 10;

  placeholderImageUrl = 'images/placeholder.jpg';

  constructor(private socksService: SocksService) {}

  ngOnInit(): void {
    this.socks$ = this.socksService.get();

    this.filteredSocks$ = combineLatest([
      this.socks$,
      this.nameFilterSubject.asObservable(),
      this.colorFilterSubject.asObservable(),
      this.sortBySubject.asObservable(),
      this.currentPageSubject.asObservable()
    ]).pipe(
      map(([socks, nameFilter, colorFilter, sortBy, currentPage]) => {
        let filtered = socks.filter(sock =>
          sock.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
          sock.variant.toLowerCase().includes(colorFilter.toLowerCase())
        );

        filtered = filtered.sort((a, b) => {
          if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
          } else if (sortBy === 'price') {
            return a.price - b.price;
          }
          return 0;
        });

        const startIndex = (currentPage - 1) * this.pageSize;
        return filtered.slice(startIndex, startIndex + this.pageSize);
      })
    );
  }

  onFilterName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.nameFilterSubject.next(name);
  }

  onFilterColor(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    this.colorFilterSubject.next(color);
  }

  onSortBy(event: Event) {
    const sortBy = (event.target as HTMLInputElement).value;
    this.sortBySubject.next(sortBy);
  }

  onPageChange(page: number) {
    this.currentPageSubject.next(page);
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = this.placeholderImageUrl;
  }
}

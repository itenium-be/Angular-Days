import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review, Sock } from './sock.model';

@Injectable({
  providedIn: 'root'
})
export class SocksService {
  constructor(private http: HttpClient) { }

  get(): Observable<Sock[]> {
    return this.http.get<Sock[]>('http://localhost:3000/socks')
  }

  getById(id: number): Observable<Sock> {
    return this.http.get<Sock>(`http://localhost:3000/socks/${id}`)
  }

  getLatest(): Observable<Sock[]> {
    return this.http.get<Sock[]>('http://localhost:3000/socks/latest')
  }

  getLatestReviews(): Observable<Review[]> {
    return this.http.get<Review[]>('http://localhost:3000/socks/reviews/latest')
  }
}

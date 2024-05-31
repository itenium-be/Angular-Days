import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review, Sock } from '@models/sock.model';

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

  buySocks(id: number): Observable<{msg: string}> {
    return this.http.post<{msg: string}>('http://localhost:3000/socks/buy', {id})
  }

  getLatestReviews(): Observable<Review[]> {
    return this.http.get<Review[]>('http://localhost:3000/socks/reviews/latest')
  }

  getSockReviews(sockId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`http://localhost:3000/socks/reviews/${sockId}`)
  }

  addReview(socksId: number, text: string, rating: 1 | 2 | 3 | 4 | 5): Observable<{msg: string}> {
    return this.http.post<{msg: string}>('http://localhost:3000/socks/reviews/', {socksId, text, rating})
  }
}

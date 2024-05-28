import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sock } from './sock.model';

@Injectable({
  providedIn: 'root'
})
export class SocksService {
  constructor(private http: HttpClient) { }

  get(): Observable<Sock[]> {
    return this.http.get<Sock[]>('http://localhost:3000/socks')
  }
}

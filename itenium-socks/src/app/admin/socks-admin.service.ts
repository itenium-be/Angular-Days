import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review, Sock } from '@models/sock.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SocksAdminService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  deleteSock(sockId: number): Observable<boolean> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken())
    return this.http.delete<boolean>(`http://localhost:3000/socks/${sockId}`, { headers })
  }
}

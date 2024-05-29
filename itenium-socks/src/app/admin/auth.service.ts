import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, map, of } from "rxjs";

type Login = {
  userName: string;
  password: string;
}

type TokenResult = {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token$ = new BehaviorSubject('');
  loggedIn$ = this.token$.pipe(map(token => !!token));

  constructor(private http: HttpClient, private router: Router) {}

  checkLogin(): Observable<boolean> {
    return this.loggedIn$;
  }

  login(creds: Login): void {
    this.http.post<TokenResult>('http://localhost:3000/users', creds)
      .pipe(
        map(result => {
          if (result.token) {
            this.token$.next(result.token);
            this.router.navigateByUrl('/admin');
          } else {
            this.token$.next('');
          }
        })
      )
      .subscribe();
  }
}

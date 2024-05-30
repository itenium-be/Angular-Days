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
  constructor(private http: HttpClient, private router: Router) {}

  checkLogin(): Observable<boolean> {
    return of(true);
  }

  login(creds: Login): void {
    // TODO: login user
  }

  getToken(): string {
    return '';
  }
}

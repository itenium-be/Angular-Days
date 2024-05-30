import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { map, of } from "rxjs";
import { AuthService } from "./auth.service";

export const canActivate = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return of(true);
}

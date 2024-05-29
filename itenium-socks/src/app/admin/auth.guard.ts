import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { map, of } from "rxjs";
import { AuthService } from "./auth.service";

export const canActivate = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkLogin().pipe(
    map(success => {
      if (success)
        return of(true);

      router.navigate(['/admin/login']);
      return of(false);
    })
  );
}

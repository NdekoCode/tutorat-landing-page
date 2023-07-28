import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from 'src/app/shared/services/auth/auth.service'
import { AUTH_ROUTES } from '../routes/routes'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthService) {}
  // eslint-disable-next-line class-methods-use-this
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return (
      this.auth.isLoggedIn() || this.router.createUrlTree([AUTH_ROUTES.LOGIN])
    )
  }
}

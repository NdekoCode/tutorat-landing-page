/* eslint-disable no-console */
import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router'
import { Observable, of } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'
import { UserService } from 'src/app/shared/services/user/user.service'
import { AUTH_ROUTES, MYSPACE_ROUTES } from '../routes/routes'
import { ITutor } from '../utilities/interfaces'

@Injectable({
  providedIn: 'root'
})
export class VerifyTutorGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private tutorService: TutorService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.userService.getUserAuth().pipe(
      catchError(() => of(null)),
      map((user) => {
        console.log(user)
        if (user && this.tutorService.isTutor(user as ITutor)) {
          console.log('Is a tutor')
          if (!this.tutorService.tutorCompletedProfile(user as ITutor)) {
            console.log('Tutor profile not completed')
            this.router.navigate([AUTH_ROUTES.TUTOR_FORM])
          } else {
            console.log('Tutor profile completed')
            this.router.navigate([MYSPACE_ROUTES.HOME])
          }
          return false
        }
        return true
      })
    )
  }
}

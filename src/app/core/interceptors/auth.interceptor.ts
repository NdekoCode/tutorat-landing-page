import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, catchError, switchMap, throwError } from 'rxjs'
import { ApiConfigService } from 'src/app/shared/services/api-config/api-config.service'
import { TokenService } from 'src/app/shared/services/auth/token.service'
import { AUTH_ROUTES } from '../routes/routes'
import { AUTH_TYPE } from '../utilities/constants'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  refresh = false

  constructor(
    private apiConfig: ApiConfigService,
    private tokenService: TokenService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken()
    const req = request.clone({
      setHeaders: {
        Authorization: `${AUTH_TYPE.BEARER} ${token.accessToken}`
      }
    })

    const refreshTokenUrl = `${this.apiConfig.url}/auth/refresh-tokens`
    if (req.url === refreshTokenUrl) {
      const requestWithAuthHeader = req.clone({
        setHeaders: {
          Authorization: `${AUTH_TYPE.BEARER} ${token.refreshToken}`
        }
      })
      return next.handle(requestWithAuthHeader)
    }

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 && !this.refresh) {
          this.refresh = true
          return this.tokenService.refreshToken().pipe(
            switchMap((res) => {
              this.tokenService.saveToken(res!)

              return next.handle(
                request.clone({
                  setHeaders: {
                    Authorization: `${AUTH_TYPE.BEARER} ${this.tokenService.token.accessToken}`
                  }
                })
              )
            }),
            catchError((err: HttpErrorResponse) => {
              return throwError(() =>
                this.apiConfig.router.navigate([AUTH_ROUTES.LOGIN])
              )
            })
          )
        }

        this.refresh = false
        return throwError(() => err)
      })
    )
  }
}
export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  // On le met à disposition partout
  multi: true
}

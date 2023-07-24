import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TokenService } from 'src/app/shared/services/auth/token.service'
import { Token } from '../utilities/types'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  // eslint-disable-next-line class-methods-use-this
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // S'il y a un token
    if (this.tokenService.tokenExists()) {
      const token: Token = this.tokenService.getToken()
      // On peut pas modifier une requete mais on peut le cloner
      const cloneRequest = request.clone({
        headers: request.headers.set(
          'Authorization',
          `Bearer ${token.accessToken}`
        )
      })
      return next.handle(cloneRequest)
    }
    return next.handle(request)
  }
}
export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  // On le met à disposition partout
  multi: true
}

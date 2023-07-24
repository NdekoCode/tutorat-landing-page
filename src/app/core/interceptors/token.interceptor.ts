import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { catchError, filter, switchMap, take } from 'rxjs/operators'
import { TokenService } from 'src/app/shared/services/auth/token.service'
import { Token } from '../utilities/types'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private refreshingToken: boolean = false
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null)

  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Vérifier s'il y a un token dans le localStorage
    if (this.tokenService.tokenExists()) {
      const token: Token = this.tokenService.getToken()
      // Cloner la requête et ajouter le token au header
      const cloneRequest = this.addTokenToRequest(request, token.accessToken)

      return next.handle(cloneRequest).pipe(
        catchError((error) => {
          // Vérifier si la réponse a un statut 401 (non autorisé)
          if (error.status === 401) {
            // Vérifier si nous sommes déjà en train de rafraîchir le token
            if (!this.refreshingToken) {
              this.refreshingToken = true
              this.tokenSubject.next(null)

              // Appeler la méthode refreshToken du service TokenService pour obtenir un nouveau token
              return this.tokenService.refreshToken().pipe(
                switchMap((response) => {
                  this.refreshingToken = false
                  // Stocker le nouveau token dans le tokenSubject et le localStorage
                  this.tokenSubject.next(response?.accessToken!)
                  this.tokenService.saveToken(response!)

                  // Passer à la requête suivante avec le nouveau token dans le header
                  return next.handle(
                    this.addTokenToRequest(request, response?.accessToken!)
                  )
                }),
                catchError((err) => {
                  this.refreshingToken = false
                  this.tokenService.clearToken()
                  return throwError('Error refresh token ', err)
                })
              )
            }
            // Attendre que le nouveau token soit disponible dans le tokenSubject
            return this.tokenSubject.pipe(
              filter((token) => token !== null),
              take(1),
              switchMap((accessToken) => {
                // Passer à la requête suivante avec le nouveau token dans le header
                return next.handle(
                  this.addTokenToRequest(request, accessToken!)
                )
              })
            )
          }

          return throwError(error)
        })
      )
    }

    // Si aucun token n'est trouvé, passer à la requête suivante sans modification
    return next.handle(request)
  }

  // eslint-disable-next-line class-methods-use-this
  private addTokenToRequest(
    request: HttpRequest<unknown>,
    token: string
  ): HttpRequest<unknown> {
    // Cloner la requête et ajouter le token au header
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  // On le met à disposition partout
  multi: true
}

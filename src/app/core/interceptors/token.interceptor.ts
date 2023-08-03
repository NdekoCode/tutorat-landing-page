import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { EMPTY, Observable, throwError } from 'rxjs'
import { catchError, switchMap } from 'rxjs/operators'
import { AuthService } from 'src/app/shared/services/auth/auth.service'
import { TokenService } from 'src/app/shared/services/auth/token.service'
import { environment } from 'src/environments/environment'
import { AUTH_ROUTES_ARRAY } from '../routes/routes'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Vérifier si l'utilisateur est authentifié
    const url = request.url.replace(environment.BASE_URL, '')
    if (!this.authService.isLoggedIn() && !AUTH_ROUTES_ARRAY.includes(url)) {
      // Rediriger vers la page de login
      this.authService.redirectToLogin()
      return EMPTY
    }

    // Récupérer le token d'accès
    const accessToken = this.tokenService.getAccessToken()

    // Cloner la requête et ajouter le token
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    // Envoyer la requête authentifiée
    return next.handle(authReq).pipe(
      // Intercepter les erreurs
      catchError((error) => {
        // Vérifier si l'erreur est un 401 non autorisé
        if (error instanceof HttpErrorResponse && error.status === 401) {
          const refreshToken = this.tokenService.getAccessToken()
          // Tenter de rafraîchir le token
          return this.authService.refreshToken(refreshToken).pipe(
            switchMap(() => {
              // Réessayer la requête avec le nouveau token
              return next.handle(this.addAuthenticationToken(request))
            }),
            catchError((refreshError) => {
              // Rediriger vers la page de login si échec
              this.authService.redirectToLogin()
              return EMPTY
            })
          )
        }

        // Renvoyer l'erreur
        return throwError(error)
      })
    )
  }

  private addAuthenticationToken(
    request: HttpRequest<unknown>
  ): HttpRequest<unknown> {
    // Obtenir le token d'accès
    const accessToken = this.tokenService.getAccessToken()
    // Cloner la requête et ajouter le token d'accès dans le header
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
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

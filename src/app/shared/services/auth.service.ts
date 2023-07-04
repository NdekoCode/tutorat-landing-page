import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import {
  IAlertSuccess,
  IToken,
  IloginCredentials,
  IsignupCredentials
} from 'src/app/core/utilities/types'
import { ApiConfigService } from './api-config.service'
import { TokenService } from './token.service'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    public token: TokenService,
    private apiConfig: ApiConfigService
  ) {}

  login(
    credentials: IloginCredentials
  ): Observable<IAlertSuccess | object | IToken> {
    return this.httpClient.post(
      this.apiConfig.url + '/auth/signin',
      credentials
    )
  }

  signup(credentials: IsignupCredentials): Observable<IToken> {
    return this.httpClient.post<IToken>(
      this.apiConfig.url + '/auth/signup',
      credentials
    )
  }

  isLogged(): boolean {
    return this.token.tokenExists()
  }
  logout(): void {
    this.token.clearToken()
  }
}

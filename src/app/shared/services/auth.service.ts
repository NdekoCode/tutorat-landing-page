import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import {
  IAlertSuccess,
  IPasswordCredentials,
  IToken,
  IloginCredentials,
  IsignupCredentials,
  ResponseDefault
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

  signup(
    credentials: IsignupCredentials
  ): Observable<object | number | string | null> {
    return this.httpClient.post<object | number | string | null>(
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
  sendResetPasswordToken(email: string): Observable<ResponseDefault> {
    return this.httpClient.post<ResponseDefault>(
      this.apiConfig.url + '/auth/send-reset-password-token',
      email
    )
  }
  resetPassword(
    token: string,
    credential: IPasswordCredentials
  ): Observable<ResponseDefault> {
    return this.httpClient.patch<ResponseDefault>(
      `${this.apiConfig.url}/auth/reset-password?token=${token}`,
      credential
    )
  }
}

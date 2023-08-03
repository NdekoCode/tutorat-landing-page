import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import {
  AlertSuccess,
  LoginCredentials,
  PasswordCredentials,
  SignupCredentials,
  Token,
  UtilityType
} from 'src/app/core/utilities/types'
import { ApiConfigService } from '../api-config/api-config.service'
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
    credentials: LoginCredentials
  ): Observable<AlertSuccess | object | Token> {
    return this.httpClient.post(
      this.apiConfig.url + '/auth/signin',
      credentials
    )
  }

  signup(
    credentials: SignupCredentials
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
  sendResetPasswordToken(email: string): Observable<UtilityType> {
    return this.httpClient.post<UtilityType>(
      this.apiConfig.url + '/auth/send-reset-password-token',
      email
    )
  }
  resetPassword(
    token: string,
    credential: PasswordCredentials
  ): Observable<UtilityType> {
    return this.httpClient.patch<UtilityType>(
      `${this.apiConfig.url}/auth/reset-password?token=${token}`,
      credential
    )
  }
}

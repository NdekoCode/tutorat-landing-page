import {
  GoogleLoginProvider,
  SocialAuthService
} from '@abacritt/angularx-social-login'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { AUTH_ROUTES } from 'src/app/core/routes/routes'
import {
  AlertSuccess,
  LoginCredentials,
  PasswordCredentials,
  SignupCredentials,
  Token,
  User,
  UtilityType
} from 'src/app/core/utilities/types'
import { ApiConfigService } from '../api-config/api-config.service'
import { TokenService } from './token.service'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  googleAccessToken!: string
  // eslint-disable-next-line max-params
  constructor(
    private httpClient: HttpClient,
    public token: TokenService,
    private apiConfig: ApiConfigService,
    private socialAuthService: SocialAuthService
  ) {}
  get socialAuth() {
    return this.socialAuthService
  }
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
    this.apiConfig.router.navigate([AUTH_ROUTES.LOGIN])
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

  authWithGoogle(idToken: string): Observable<Token> {
    return this.httpClient.post<Token>(`${this.apiConfig.url}/auth/google`, {
      idToken,
      accessToken: ''
    })
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
  logOut(): void {
    this.socialAuthService.signOut()
  }
  getAuthUserInfo(): Observable<User> {
    return this.httpClient.get<User>(`${this.apiConfig.url}/users/me`)
  }
  getAccessToken(): void {
    this.socialAuthService
      .getAccessToken(GoogleLoginProvider.PROVIDER_ID)
      .then((accessToken) => (this.googleAccessToken = accessToken))
  }
}

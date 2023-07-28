import {
  GoogleLoginProvider,
  SocialAuthService
} from '@abacritt/angularx-social-login'
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
    return this.apiConfig.http.post(
      this.apiConfig.url + '/auth/signin',
      credentials
    )
  }

  signup(
    credentials: SignupCredentials
  ): Observable<object | number | string | null> {
    return this.apiConfig.http.post<object | number | string | null>(
      this.apiConfig.url + '/auth/signup',
      credentials
    )
  }

  isLoggedIn(): boolean {
    return this.token.tokenExists()
  }
  logout(): void {
    this.token.clearToken()
    this.apiConfig.router.navigate([AUTH_ROUTES.LOGIN])
  }
  sendResetPasswordToken(email: string): Observable<UtilityType> {
    return this.apiConfig.http.post<UtilityType>(
      this.apiConfig.url + '/auth/send-reset-password-token',
      email
    )
  }
  redirectToLogin() {
    return this.apiConfig.router.navigate([AUTH_ROUTES.LOGIN])
  }
  resetPassword(
    token: string,
    credential: PasswordCredentials
  ): Observable<UtilityType> {
    return this.apiConfig.http.patch<UtilityType>(
      `${this.apiConfig.url}/auth/reset-password?token=${token}`,
      credential
    )
  }

  authWithGoogle(idToken: string): Observable<Token> {
    return this.apiConfig.http.post<Token>(
      `${this.apiConfig.url}/auth/google`,
      {
        idToken,
        accessToken: ''
      }
    )
  }
  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
  logOut(): void {
    this.socialAuthService.signOut()
  }
  getAuthUserInfo(): Observable<User> {
    return this.apiConfig.http.get<User>(`${this.apiConfig.url}/users/me`)
  }
  refreshToken(refreshToken: string): Observable<Token | null> {
    if (this.token.tokenExists()) {
      return this.apiConfig.http.get<Token>(
        this.apiConfig.url + '/auth/refresh-tokens',
        {
          headers: {
            Authorization: 'Bearer ' + refreshToken
          }
        }
      )
    }
    return null as unknown as Observable<Token | null>
  }
  getAccessToken(): void {
    this.socialAuthService
      .getAccessToken(GoogleLoginProvider.PROVIDER_ID)
      .then((accessToken) => (this.googleAccessToken = accessToken))
  }
}

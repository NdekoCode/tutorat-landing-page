import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import {
  hasProperties,
  isEmptyObject,
  localStorageGetItem,
  localStorageSetItem
} from 'src/app/core/utilities/helpers'
import { Token } from 'src/app/core/utilities/types'
import { ApiConfigService } from '../api-config/api-config.service'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token!: Token
  tokenKey: string = 'userToken'
  constructor(private apiConfig: ApiConfigService) {}
  saveToken(value: Token, key: string = 'userToken'): void {
    this.token = value
    if (key.trim().length > 0) {
      this.tokenKey = key
    }
    localStorageSetItem(this.tokenKey, this.token)
  }
  getAccessToken() {
    return this.token.accessToken
  }
  getRefreshToken() {
    return this.token.refreshToken
  }
  getToken(): Token {
    this.token = localStorageGetItem(this.tokenKey) as Token
    return this.token
  }
  tokenExists(): boolean {
    this.token = this.getToken()
    const condition =
      !isEmptyObject(this.token) &&
      hasProperties(this.token, ['accessToken', 'refreshToken'])
    return (
      condition &&
      this.token.accessToken.length >= 150 &&
      this.token.refreshToken.length >= 150
    )
  }
  clearToken(key: string = 'userToken'): void {
    if (key.trim().length > 0) {
      this.tokenKey = key
    }
    window.localStorage.removeItem(this.tokenKey)
  }

  refreshToken(): Observable<Token | null> {
    if (this.tokenExists()) {
      return this.apiConfig.http.get<Token>(
        this.apiConfig.url + '/auth/refresh-tokens',
        {
          headers: {
            Authorization: 'Bearer ' + this.token.refreshToken
          }
        }
      )
    }
    return null as unknown as Observable<Token | null>
  }
  clearTokenExpired(key: string = 'userToken'): void {
    this.clearToken()
  }
}

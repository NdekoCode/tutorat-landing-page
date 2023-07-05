import { Injectable } from '@angular/core'
import { hasProperties, isEmptyObject } from 'src/app/core/utilities/helpers'
import { IToken } from 'src/app/core/utilities/types'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token!: IToken
  tokenKey: string = 'userToken'
  saveToken(value: IToken, key: string = 'userToken'): void {
    this.token = value
    if (key.trim().length > 0) {
      this.tokenKey = key
    }
    window.localStorage.setItem(this.tokenKey, JSON.stringify(this.token))
  }
  getToken(): IToken {
    this.token = JSON.parse(
      window.localStorage.getItem(this.tokenKey)!
    ) as IToken
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
}

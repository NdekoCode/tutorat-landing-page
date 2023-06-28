import { Injectable } from '@angular/core'
import { IToken } from 'src/app/core/utilities/types'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() {}
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
    const token = this.getToken()
    return token.accessToken.length >= 150 && token.refreshToken.length >= 150
  }
}

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import {
  IAlertSuccess,
  IToken,
  IloginCredentials,
  IsignupCredentials
} from 'src/app/core/utilities/types'
import { environment } from 'src/environments/environment'
import { TokenService } from './token.service'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.BASE_URL + '/auth'
  constructor(private httpClient: HttpClient, public token: TokenService) {}

  login(
    credentials: IloginCredentials
  ): Observable<IAlertSuccess | object | IToken> {
    return this.httpClient.post(this.url + '/signin', credentials)
  }

  signup(credentials: IsignupCredentials): Observable<IToken> {
    return this.httpClient.post<IToken>(this.url + '/signup', credentials)
  }

  isLogged(): boolean {
    return this.token.tokenExists()
  }
}

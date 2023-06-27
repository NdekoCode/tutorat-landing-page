import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import {
  IToken,
  IloginCredentials,
  IsignupCredentials
} from 'src/app/core/utilities/types'
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.BASE_URL + '/auth'
  constructor(private _httpClient: HttpClient) {}
  login(credentials: IloginCredentials): Observable<object> {
    return this._httpClient.post<IToken>(this.url + '/signin', credentials)
  }
  signup(credentials: IsignupCredentials): Observable<object> {
    return this._httpClient.post(this.url + '/signup', credentials)
  }
}

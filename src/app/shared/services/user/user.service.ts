import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { UpdateCredentialUser, User } from 'src/app/core/utilities/types'
import { ApiConfigService } from '../api-config/api-config.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user!: ITutor | User | null
  constructor(private apiConfig: ApiConfigService) {}
  getUserAuth(): Observable<ITutor | User | null> {
    return this.apiConfig.http.get<ITutor | User | null>(
      this.apiConfig.url + '/users/me'
    )
  }
  updateUser(crediential: UpdateCredentialUser) {
    return this.apiConfig.http.patch<ITutor | User | null>(
      this.apiConfig.url + '/users/update-me',
      crediential
    )
  }
  makeMeTutor() {
    return this.apiConfig.http.patch(
      this.apiConfig.url + '/users/make-me-tutor',
      null
    )
  }
}

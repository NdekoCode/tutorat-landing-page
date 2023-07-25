import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiConfigService } from '../api-config/api-config.service'

@Injectable({
  providedIn: 'root'
})
export class VerifyService {
  constructor(public apiConfig: ApiConfigService) {}
  verifyUser(token: string): Observable<{ message: string }> {
    return this.apiConfig.http.get<{ message: string }>(
      this.apiConfig.url + `/auth/verify-email?token=${token}`
    )
  }

  verifyResetPasswordToken(token: string): Observable<{ message: string }> {
    return this.apiConfig.http.post<{ message: string }>(
      this.apiConfig.url + `/auth/validate-reset-password-token?token=${token}`,
      {}
    )
  }
}

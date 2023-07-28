import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TUTOR_REQUIRED_FIELDS } from 'src/app/core/utilities/constants'
import {
  getLimitData,
  hasProperties,
  isEmptyObject,
  isExists
} from 'src/app/core/utilities/helpers'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { TutorCredentials } from 'src/app/core/utilities/types'
import { ApiConfigService } from '../api-config/api-config.service'
import { UserService } from '../user/user.service'

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  _tutors!: ITutor[]
  constructor(
    private apiConfig: ApiConfigService,
    public userService: UserService
  ) {}
  getTutors(): Observable<ITutor[]> {
    return this.apiConfig.http.get<ITutor[]>(
      `${this.apiConfig.url}/users/all-tutors`
    )
  }
  getLimitTutor(tutor: ITutor[], limit: number = 12) {
    this._tutors = getLimitData(tutor, limit) as ITutor[]
    return this._tutors
  }

  // eslint-disable-next-line class-methods-use-this
  tutorCompletedProfile(user: ITutor) {
    return hasProperties({ ...user }, TUTOR_REQUIRED_FIELDS as string[], true)
  }

  getSingleTutor(id: number): Observable<ITutor | null> {
    return this.apiConfig.http.get<ITutor>(
      `${this.apiConfig.url}/users/tutor/${id}`
    )
  }
  getSuggestionTutors(city: string): Observable<ITutor[]> {
    return this.apiConfig.http.get<ITutor[]>(
      `${this.apiConfig.url}/users/all-tutors?address=${city}`
    )
  }
  // eslint-disable-next-line class-methods-use-this
  isTutor(tutor: ITutor): boolean {
    return isExists(tutor) && isExists(tutor?.user) && !isEmptyObject(tutor)
  }
  updateTutorData(
    credentials: TutorCredentials
  ): Observable<{ message: string }> {
    return this.apiConfig.http.patch<{ message: string }>(
      this.apiConfig.url + '/users/update-tutor-data',
      credentials
    )
  }
}

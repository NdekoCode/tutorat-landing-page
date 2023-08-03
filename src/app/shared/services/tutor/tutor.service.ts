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
import { Tutor, TutorCredentials, User } from 'src/app/core/utilities/types'
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
  tutorCompletedProfile(user: ITutor | User | Tutor) {
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
  isTutor(tutor: ITutor | User): boolean {
    if ('user' in tutor) {
      return isExists(tutor?.user) && !isEmptyObject(tutor?.user)
    }
    return false
  }
  // eslint-disable-next-line class-methods-use-this
  meIsTutor(user: ITutor | User) {
    if ('tutor' in user) {
      return isExists(user?.tutor) && !isEmptyObject(user.tutor)
    }
    return false
  }
  updateTutorData(
    credentials: TutorCredentials
  ): Observable<{ message: string }> {
    return this.apiConfig.http.patch<{ message: string }>(
      this.apiConfig.url + '/users/update-tutor-data',
      credentials
    )
  }
  getSingleTutor(id: number): ITutor | undefined {
    return this.getTutors().find((tutor) => tutor.id === id)
  }
  getSuggestionTutors(city: string) {
    this._tutors = this.getTutors().filter((t) => t.address.city === city)
    return this._tutors
  }
}

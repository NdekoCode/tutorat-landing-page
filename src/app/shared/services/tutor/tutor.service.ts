import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TUTOR_REQUIRED_FIELDS } from 'src/app/core/utilities/constants'
import {
  getLimitData,
  getUsers,
  hasProperties,
  isEmptyObject,
  isExists
} from 'src/app/core/utilities/helpers'
import { TutorCredentials, User } from 'src/app/core/utilities/types'
import { ApiConfigService } from '../api-config/api-config.service'
import { UserService } from '../user/user.service'

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  _tutors!: User[]
  constructor(
    private apiConfig: ApiConfigService,
    public userService: UserService
  ) {}
  getTutors(): User[] | [] {
    return getUsers(true)
  }
  getLimitTutor(tutor: User[], limit: number = 12) {
    this._tutors = getLimitData(tutor, limit) as User[]
    return this._tutors
  }

  // eslint-disable-next-line class-methods-use-this
  tutorCompletedProfile(user: User | null) {
    return hasProperties({ ...user }, TUTOR_REQUIRED_FIELDS as string[], true)
  }
  // eslint-disable-next-line class-methods-use-this
  isTutor(user: User): boolean {
    if ('tutor' in user) {
      return isExists(user?.tutor) && !isEmptyObject(user?.tutor)
    }
    return false
  }
  // eslint-disable-next-line class-methods-use-this
  meIsTutor(user: User) {
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
  getSingleTutor(id: number): User | undefined {
    return this.getTutors().find((tutor) => tutor.id === id)
  }
  getSuggestionTutors(city: string) {
    this._tutors = this.getTutors().filter((t) => t?.address?.city === city)
    return this._tutors
  }
}

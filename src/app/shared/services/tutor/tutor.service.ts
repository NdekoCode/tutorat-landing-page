import { Injectable } from '@angular/core'
import { TUTOR_REQUIRED_FIELDS } from 'src/app/core/utilities/constants'
import {
  getLimitData,
  getUsers,
  hasProperties,
  isEmptyObject,
  isExists
} from 'src/app/core/utilities/helpers'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { User } from 'src/app/core/utilities/types'
import { ApiConfigService } from '../api-config/api-config.service'

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  _tutors!: ITutor[]
  constructor(private apiConfig: ApiConfigService) {}
  getTutors() {
    this._tutors = getUsers(true) as ITutor[]
    return this._tutors
  }
  getLimitTutor(limit: number = 12) {
    this._tutors = getLimitData(this.getTutors(), limit) as ITutor[]
    return this._tutors
  }

  // eslint-disable-next-line class-methods-use-this
  tutorCompletedProfile(user: ITutor) {
    return hasProperties(user.tutor, TUTOR_REQUIRED_FIELDS as string[], true)
  }
  // eslint-disable-next-line class-methods-use-this
  isTutor(user: User | ITutor): boolean {
    return isExists(user?.tutor) && !isEmptyObject(user?.tutor)
  }
}

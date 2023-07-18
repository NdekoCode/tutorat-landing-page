import { Injectable } from '@angular/core'
import { getLimitData, getUsers } from 'src/app/core/utilities/helpers'
import { ITutor } from 'src/app/core/utilities/interfaces'

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  _tutors!: ITutor[]
  constructor() {}
  getTutors() {
    this._tutors = getUsers(true) as ITutor[]
    return this._tutors
  }
  getLimitTutor(limit: number = 12) {
    this._tutors = getLimitData(this.getTutors(), limit) as ITutor[]
    return this._tutors
  }
}

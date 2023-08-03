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
  getSingleTutor(id: number): ITutor | undefined {
    return this.getTutors().find((tutor) => tutor.id === id)
  }
  getSuggestionTutors(city: string) {
    this._tutors = this.getTutors().filter((t) => t.address.city === city)
    return this._tutors
  }
}

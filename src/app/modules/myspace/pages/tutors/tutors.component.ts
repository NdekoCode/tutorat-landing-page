import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  filterTutor,
  generateArray,
  objectHasValue
} from 'src/app/core/utilities/helpers'
import { Tutor, User } from 'src/app/core/utilities/types'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'
import { UtilityType } from './../../../../core/utilities/types'

@Component({
  selector: 'app-tutors-page',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.scss']
})
export class TutorsComponent implements OnInit {
  userId!: number
  tutors: User[] = []
  isLoading: boolean = false
  filteredTutors: User[] = []
  filters: {
    city: string
    cours: string | number
    [key: string | keyof Tutor]: UtilityType
  } = {
    hourlyRate: 0,
    cours: '',
    city: ''
  }
  isShown: boolean = false
  videoId!: string
  constructor(
    private activatedRoute: ActivatedRoute,
    private tutorService: TutorService
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id']
    this.isLoading = true

    this.tutors = this.tutorService.getLimitTutor(this.tutorService.getTutors())
    this.filteredTutors = this.tutors
    this.isLoading = false
  }
  onHandleChange() {
    this.filterTutors(
      this.filters as {
        [key: string]: UtilityType
        city: string
        cours: string | number
      }
    )
  }
  filterTutors(filter: {
    city: string
    cours: string | number
    [key: string]: UtilityType
  }) {
    if (objectHasValue(filter)) {
      this.filteredTutors = filterTutor(this.tutors, filter)
    } else {
      this.filteredTutors = this.tutors
    }
  }
  getTutorEventData(user: User) {
    const urlPart = user?.tutor?.video.url.split('/') as string[]
    this.videoId = urlPart[urlPart?.length - 1]
    if (this.videoId) {
      this.onToggleShow()
    }
  }

  onShow(arg: Event | boolean) {
    this.onToggleShow()
  }
  // eslint-disable-next-line class-methods-use-this
  autoArray(n: number) {
    return generateArray(n)
  }

  onToggleShow() {
    this.isShown = !this.isShown
  }
}

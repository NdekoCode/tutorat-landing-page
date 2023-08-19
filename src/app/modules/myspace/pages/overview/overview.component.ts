import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  filterTutor,
  generateArray,
  isExists,
  objectHasValue
} from 'src/app/core/utilities/helpers'
import { Tutor, User, UtilityType } from 'src/app/core/utilities/types'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'
import { CoursesService } from '../../../../shared/services/courses/courses.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  userId!: number
  isLoading: boolean = false
  tutors: User[] = []
  suggestionTutors: User[] = []
  filteredTutors: User[] = []
  topTutors: User[] = []
  filters: Partial<Tutor & { city: string; cours?: string | number }> = {
    hourlyRate: 0,
    cours: '',
    city: ''
  }
  isShown: boolean = false
  videoId!: string
  constructor(
    private activatedRoute: ActivatedRoute,
    private tutorService: TutorService,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id']
    this.isLoading = true

    this.tutors = this.tutorService.getTutors()
    this.filteredTutors = this.tutors
    this.suggestionTutors = this.tutors.filter(
      (user) => isExists(user?.address) && user?.address?.city === 'Goma'
    )
    this.topTutors = this.tutorService.getLimitTutor(this.tutors, 20)
    this.isLoading = false
  }
  filterTutors(
    filter: Tutor & {
      city: string
      cours: string | number
      [key: string]: UtilityType
    }
  ) {
    if (objectHasValue(filter)) {
      this.filteredTutors = filterTutor(this.tutors, filter)
    } else {
      this.filteredTutors = this.tutors
    }
  }
  getTutorEventData(tutor: Tutor) {
    const urlPart = tutor.video.url.split('/')
    this.videoId = urlPart[urlPart.length - 1]
    this.onToggleShow()
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

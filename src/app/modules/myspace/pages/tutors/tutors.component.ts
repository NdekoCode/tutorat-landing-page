import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  filterTutor,
  generateArray,
  objectHasValue
} from 'src/app/core/utilities/helpers'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { Tutor } from 'src/app/core/utilities/types'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'

@Component({
  selector: 'app-tutors-page',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.scss']
})
export class TutorsComponent {
  userId!: number
  filteredTutors: ITutor[] = []
  filters: Partial<Tutor & { city: string; cours?: string | number }> = {
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

  get tutors() {
    return this.tutorService.getLimitTutor()
  }
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id']
    this.filteredTutors = this.tutors
  }
  filterTutors(
    filter: Partial<Tutor & { city: string; cours?: string | number }>
  ) {
    if (objectHasValue(filter)) {
      this.filteredTutors = filterTutor(this.tutors, filter) as ITutor[]
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

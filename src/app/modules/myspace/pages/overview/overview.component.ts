import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { filterTutor, objectHasValue } from 'src/app/core/utilities/helpers'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { Tutor } from 'src/app/core/utilities/types'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'
import { CoursesService } from '../../../../shared/services/courses/courses.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  userId!: number
  suggestionTutors: ITutor[] = []
  filteredTutors: ITutor[] = []
  topTutors: ITutor[] = []
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

  get tutors() {
    return this.tutorService.getLimitTutor()
  }
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id']
    this.filteredTutors = this.tutors
    this.coursesService.getAllCourses()
  }
  filterTutors(
    filter: Partial<Tutor & { city: string; cours?: string | number }>
  ) {
    if (objectHasValue(filter)) {
      this.filteredTutors = filterTutor(this.tutors, filter) as ITutor[]
    } else {
      this.filteredTutors = this.tutors
    }
    this.suggestionTutors = this.tutorService
      .getTutors()
      .filter((t) => t.address.city === 'Goma')
    this.topTutors = this.tutorService.getLimitTutor(20)
  }
}

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { Tutor } from 'src/app/core/utilities/types'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  userId!: number
  suggestionTutors: ITutor[] = []
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
    private tutorService: TutorService
  ) {}

  get tutors() {
    return this.tutorService.getLimitTutor()
  }
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id']
    this.suggestionTutors = this.tutorService
      .getTutors()
      .filter((t) => t.address.city === 'Goma')
    this.topTutors = this.tutorService.getLimitTutor(20)
  }
}

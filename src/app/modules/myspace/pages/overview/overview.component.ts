import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { generateArray } from 'src/app/core/utilities/helpers'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  userId!: number
  constructor(
    private activatedRoute: ActivatedRoute,
    private tutorService: TutorService
  ) {}

  get tutors() {
    return this.tutorService.getLimitTutor()
  }
  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id']
  }
  // eslint-disable-next-line class-methods-use-this
  autoArray(n: number) {
    return generateArray(n)
  }
}

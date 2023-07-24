import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'

@Component({
  selector: 'app-view-tutor',
  templateUrl: './view-tutor.component.html',
  styleUrls: ['./view-tutor.component.scss']
})
export class ViewTutorComponent implements OnInit {
  activeFragment!: string
  tutor!: ITutor
  suggestionTutors!: ITutor[]
  userId!: number
  constructor(
    private route: ActivatedRoute,
    private tutorService: TutorService
  ) {}
  ngOnInit() {
    this.userId = this.route.snapshot.params['id']
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        document.querySelector('#' + fragment)?.scrollIntoView()
      }
    })

    if (this.userId) {
      this.tutor = this.tutorService.getSingleTutor(+this.userId) as ITutor
    }

    this.suggestionTutors = this.tutorService.getSuggestionTutors(
      this.tutor.tutor.address.city
    )
  }

  isLinkActive(fragment: string): boolean {
    return this.activeFragment === fragment
  }
}

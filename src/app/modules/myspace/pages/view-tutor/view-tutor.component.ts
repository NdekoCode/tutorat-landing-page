import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { User } from 'src/app/core/utilities/types'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'

@Component({
  selector: 'app-view-tutor',
  templateUrl: './view-tutor.component.html',
  styleUrls: ['./view-tutor.component.scss']
})
export class ViewTutorComponent implements OnInit {
  activeFragment!: string
  tutor!: User
  isLoading: boolean = false
  suggestionLoading: boolean = false
  suggestionTutors!: User[]
  userId!: number
  constructor(
    private route: ActivatedRoute,
    private tutorService: TutorService
  ) {}
  ngOnInit() {
    this.isLoading = true
    this.suggestionLoading = false
    this.userId = this.route.snapshot.params['id']
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        document.querySelector('#' + fragment)?.scrollIntoView()
      }
    })

    if (this.userId) {
      this.tutor = this.tutorService.getSingleTutor(+this.userId)!
      this.isLoading = false
    }

    this.suggestionTutors = this.tutorService.getSuggestionTutors(
      this.tutor?.address!.city
    )
    this.suggestionLoading = false
  }

  isLinkActive(fragment: string): boolean {
    return this.activeFragment === fragment
  }
}

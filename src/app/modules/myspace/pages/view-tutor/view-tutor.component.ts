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
  isLoading: boolean = false
  suggestionLoading: boolean = false
  suggestionTutors!: ITutor[]
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
      this.tutorService.getSingleTutor(+this.userId).subscribe({
        next: (tutor) => {
          this.tutor = tutor!
          this.isLoading = false
        },
        error: (err) => {
          this.isLoading = false
        }
      })
    }

    this.tutorService
      .getSuggestionTutors(this.tutor.tutor.address.city)
      .subscribe({
        next: (tutors) => {
          this.suggestionTutors = tutors
          this.suggestionLoading = false
        },
        error: (err) => {
          this.suggestionLoading = false
        }
      })
  }

  isLinkActive(fragment: string): boolean {
    return this.activeFragment === fragment
  }
}

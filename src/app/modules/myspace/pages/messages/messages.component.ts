import { Component, OnInit } from '@angular/core'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { TutorService } from '../../../../shared/services/tutor/tutor.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  usersMessage: ITutor[] = []
  isLoading = false
  activatedUser!: ITutor
  tutors: ITutor[] = []
  constructor(private tutorService: TutorService) {}
  ngOnInit(): void {
    this.isLoading = true
    this.tutorService.getTutors().subscribe({
      next: (tutors) => {
        this.tutors = tutors
        this.usersMessage = this.tutors
        this.isLoading = false
      },
      error: (err) => {
        this.isLoading = false
      }
    })
  }
  getActivatedTutor(tutor: ITutor) {
    this.activatedUser = tutor
  }
  isTutor(user: ITutor) {
    return this.tutorService.isTutor(user)
  }
}

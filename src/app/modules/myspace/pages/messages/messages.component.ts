import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/core/utilities/types'
import { TutorService } from '../../../../shared/services/tutor/tutor.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  usersMessage: User[] = []
  isLoading = false
  activatedUser!: User
  tutors: User[] = []
  constructor(private tutorService: TutorService) {}
  ngOnInit(): void {
    this.isLoading = true
    this.tutors = this.tutorService.getTutors()
    this.usersMessage = this.tutors
    this.isLoading = false
  }
  getActivatedTutor(tutor: User) {
    this.activatedUser = tutor
  }
}

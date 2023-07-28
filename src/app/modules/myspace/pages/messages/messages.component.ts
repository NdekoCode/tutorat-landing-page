import { Component, OnInit } from '@angular/core'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { TutorService } from '../../../../shared/services/tutor/tutor.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  tutorsMessage: ITutor[] = []
  activatedTutor!: ITutor
  tutors: ITutor[] = []
  constructor(private tutorService: TutorService) {}
  ngOnInit(): void {
    this.tutorService.getTutors().subscribe((tutors) => {
      this.tutors = tutors
      this.tutorsMessage = this.tutorService.getLimitTutor(this.tutors, 12)
    })
  }
  getActivatedTutor(tutor: ITutor) {
    this.activatedTutor = tutor
  }
}

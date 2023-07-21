import { Component, OnInit } from '@angular/core'
import { MYSPACE_ROUTES } from 'src/app/core/routes/routes'
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
  constructor(private tutorService: TutorService) {}
  ngOnInit(): void {
    this.tutorsMessage = this.tutorService.getLimitTutor(12)
    this.activatedTutor = this.tutorsMessage[0]
  }
  getActivatedTutor(tutor: ITutor) {
    this.activatedTutor = tutor
  }
}

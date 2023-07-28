import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ITutor } from 'src/app/core/utilities/interfaces'

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.scss']
})
export class TutorCardComponent {
  @Input() tutor!: ITutor
  @Output() playTutorVideo = new EventEmitter<ITutor>()

  playVideo() {
    this.playTutorVideo.emit(this.tutor)
  }
}

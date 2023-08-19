import { Component, EventEmitter, Input, Output } from '@angular/core'
import { User } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.scss']
})
export class TutorCardComponent {
  @Input() tutor!: User
  @Output() playTutorVideo = new EventEmitter<User>()

  playVideo() {
    this.playTutorVideo.emit(this.tutor)
  }
}

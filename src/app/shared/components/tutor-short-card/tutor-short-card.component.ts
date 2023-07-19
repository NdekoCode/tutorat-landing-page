import { Component, Input } from '@angular/core'
import { ITutor } from 'src/app/core/utilities/interfaces'

@Component({
  selector: 'app-tutor-short-card',
  templateUrl: './tutor-short-card.component.html',
  styleUrls: ['./tutor-short-card.component.scss']
})
export class TutorShortCardComponent {
  @Input() tutor!: ITutor
}

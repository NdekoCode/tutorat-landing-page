import { Component, Input } from '@angular/core'
import { User } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-tutor-short-card',
  templateUrl: './tutor-short-card.component.html',
  styleUrls: ['./tutor-short-card.component.scss']
})
export class TutorShortCardComponent {
  @Input() tutor!: User
}

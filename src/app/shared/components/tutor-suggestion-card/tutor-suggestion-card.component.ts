import { Component, Input } from '@angular/core'
import { User } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-tutor-suggestion-card',
  templateUrl: './tutor-suggestion-card.component.html',
  styleUrls: ['./tutor-suggestion-card.component.scss']
})
export class TutorSuggestionCardComponent {
  @Input() tutor!: User
}

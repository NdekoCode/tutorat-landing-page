import { Component, Input } from '@angular/core'
import { ITutor } from 'src/app/core/utilities/interfaces'

@Component({
  selector: 'app-tutor-suggestion-card',
  templateUrl: './tutor-suggestion-card.component.html',
  styleUrls: ['./tutor-suggestion-card.component.scss']
})
export class TutorSuggestionCardComponent {
  @Input() tutor!: ITutor
}

import { Component, Input } from '@angular/core'
import { ITutor } from 'src/app/core/utilities/interfaces'

@Component({
  selector: 'app-card-tutor-suggestion',
  templateUrl: './card-tutor-suggestion.component.html',
  styleUrls: ['./card-tutor-suggestion.component.scss']
})
export class CardTutorSuggestionComponent {
  @Input() tutor!: ITutor
}

import { Component, Input } from '@angular/core'
import { User } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-card-tutor-suggestion',
  templateUrl: './card-tutor-suggestion.component.html',
  styleUrls: ['./card-tutor-suggestion.component.scss']
})
export class CardTutorSuggestionComponent {
  @Input() tutor!: User
}

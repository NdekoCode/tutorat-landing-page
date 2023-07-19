import { Component, Input } from '@angular/core'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { User } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent {
  @Input() tutor!: ITutor
  @Input() usersComment!: ITutor[] | User[]
}

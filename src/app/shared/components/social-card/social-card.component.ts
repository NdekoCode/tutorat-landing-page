import { Component, Input } from '@angular/core'
import { NgForm } from '@angular/forms'
import { User } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent {
  @Input() tutor!: User
  @Input() usersComment!: User[] | []
  // eslint-disable-next-line class-methods-use-this
  postComment(form: NgForm) {
    // eslint-disable-next-line no-console
    console.log('Comment...')
  }
}

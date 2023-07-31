import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { MYSPACE_ROUTES } from 'src/app/core/routes/routes'
import { User } from 'src/app/core/utilities/types'
import { UserService } from 'src/app/shared/services/user/user.service'

@Component({
  selector: 'app-myspace-layout',
  templateUrl: './myspace-layout.component.html'
})
export class MyspaceLayoutComponent {
  isActive = false
  hideLayoutPart = false
  contentLayoutHidden: string[] = [
    MYSPACE_ROUTES.MESSAGES,
    MYSPACE_ROUTES.CALENDAR
  ]
  user: Observable<User> = this.userService.getUserAuth() as Observable<User>
  constructor(private userService: UserService) {}
  toggleActive() {
    this.isActive = !this.isActive
  }
  onToggle(arg: Event | boolean) {
    this.toggleActive()
  }
}

import { Component } from '@angular/core'
import { MYSPACE_ROUTES } from 'src/app/core/routes/routes'

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
  toggleActive() {
    this.isActive = !this.isActive
  }
  onToggle(arg: Event | boolean) {
    this.toggleActive()
  }
}

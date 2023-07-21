import { Component, EventEmitter, Input, Output } from '@angular/core'
import { AuthService } from 'src/app/shared/services/auth/auth.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout()
  }
  @Input() isActive: boolean = false

  @Output() isToggleActive = new EventEmitter<boolean>()
  toggleActive() {
    this.isActive = !this.isActive
    this.isToggleActive.emit(this.isActive)
  }
}

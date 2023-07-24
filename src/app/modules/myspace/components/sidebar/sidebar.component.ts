import { Component } from '@angular/core'
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
}

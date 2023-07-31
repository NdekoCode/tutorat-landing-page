import { Component, OnInit } from '@angular/core'
import { AUTH_ROUTES } from 'src/app/core/routes/routes'
import { ApiConfigService } from 'src/app/shared/services/api-config/api-config.service'
import { AuthService } from 'src/app/shared/services/auth/auth.service'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  constructor(
    private apiConfig: ApiConfigService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.authService.sociallogOut()
    this.authService.logout()
    this.apiConfig.router.navigate([AUTH_ROUTES.LOGIN])
  }
}

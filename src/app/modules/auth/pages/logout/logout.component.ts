import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AUTH_ROUTES } from 'src/app/core/routes/routes'
import { AuthService } from 'src/app/shared/services/auth/auth.service'

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit() {
    this.auth.logout()
    this.router.navigate([AUTH_ROUTES.LOGIN])
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { MYSPACE_ROUTES } from 'src/app/core/routes/routes'
import { ALERT_AUTH, GLOBAL_CONSTANTS } from 'src/app/core/utilities/constants'
import { emailValidator, passwordValidator } from 'src/app/core/utilities/forms'
import { Alert, Timer, Token } from 'src/app/core/utilities/types'
import { AuthService } from 'src/app/shared/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  alert: Alert = {
    isShown: false,
    alertType: 'error',
    alertTitle: '',
    alertMessage: ''
  }
  timer: Timer
  submitForm: boolean = false
  isLoading: boolean = false
  isChange: boolean = false
  public loginForm!: FormGroup
  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private _router: Router
  ) {}
  viewPassword() {
    this.isChange = !this.isChange
  }
  ngOnInit() {
    this.loginForm = this._fb.group({
      ...emailValidator,
      ...passwordValidator
    })
  }
  saveLoginForm() {
    this.submitForm = false
    this.isLoading = true
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.submitForm = true
          this.authService.token.saveToken(response as Token)
          this.isLoading = false
          this.alert = {
            isShown: true,
            alertTitle: ALERT_AUTH.login.success.alertTitle,
            alertType: 'success',
            alertMessage: ALERT_AUTH.login.success.alertMessage
          }
          setTimeout(() => {
            this._router.navigate([MYSPACE_ROUTES.HOME])
            clearTimeout(this.timer)
          }, GLOBAL_CONSTANTS.AUTH_TIMEOUT_LOGIN)
        },
        error: (err) => {
          this.submitForm = true
          this.isLoading = false
          this.alert = {
            isShown: true,
            alertTitle: ALERT_AUTH.login.error.alertTitle,
            alertType: 'error',
            alertMessage: err.error.message
          }
        }
      })
    }
  }
  ngOnDestroy(): void {
    window.clearTimeout(this.timer as number)
  }
}

import { SocialUser } from '@abacritt/angularx-social-login'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AUTH_ROUTES, MYSPACE_ROUTES } from 'src/app/core/routes/routes'
import { ALERT_AUTH, GLOBAL_CONSTANTS } from 'src/app/core/utilities/constants'
import {
  emailValidator,
  passwordValidator,
  phoneValidator
} from 'src/app/core/utilities/forms'
import { isExists } from 'src/app/core/utilities/helpers'
import { Alert, Timer, Token } from 'src/app/core/utilities/types'
import { AuthService } from 'src/app/shared/services/auth/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit, OnDestroy {
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public authService: AuthService
  ) {}
  alert: Alert = {
    isShown: false,
    alertType: 'error',
    alertTitle: '',
    alertMessage: ''
  }
  timer: Timer
  submitForm: boolean = false
  isLoading: boolean = false
  user!: SocialUser
  loggedIn!: boolean
  registerForm!: FormGroup
  isChange: boolean = false
  viewPassword() {
    this.isChange = !this.isChange
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      ...phoneValidator,
      ...emailValidator,
      ...passwordValidator,
      confirmPassword: ['', [Validators.required]]
    })
    this.googleAuth()
  }
  saveRegisterForm() {
    this.submitForm = false
    this.isLoading = true
    if (this.registerForm.valid) {
      this.authService
        .signup(this.registerForm.value)

        .subscribe({
          next: (response) => {
            this.submitForm = true
            this.alert = {
              isShown: true,
              alertTitle: ALERT_AUTH.signup.success.alertTitle,
              alertType: 'success',
              alertMessage:
                ALERT_AUTH.signup.success.alertMessage +
                this.registerForm.value.email
            }
            const loginData = {
              email: this.registerForm.get('email')?.value,
              password: this.registerForm.get('password')?.value
            }
            this.authService.login(loginData).subscribe({
              next: (response) => {
                this.authService.token.saveToken(response as Token)
                this.isLoading = false
                setTimeout(() => {
                  this.router.navigate([AUTH_ROUTES.USER_CHOICE])
                  clearTimeout(this.timer)
                }, GLOBAL_CONSTANTS.AUTH_TIMEOUT_LOGIN)
              },
              error: () => {
                this.isLoading = false
                this.timer = window.setTimeout(() => {
                  this.router.navigate([AUTH_ROUTES.LOGIN])
                  window.clearTimeout(this.timer)
                }, GLOBAL_CONSTANTS.AUTH_TIMEOUT)
              }
            })
          },
          error: (httpErrorResponse) => {
            this.submitForm = true
            this.isLoading = false
            if (httpErrorResponse.error.statusCode === 409) {
              this.alert = {
                isShown: true,
                alertTitle: ALERT_AUTH.signup.error.alertTitle,
                alertType: 'error',
                alertMessage: httpErrorResponse.error.message
              }
            } else if (httpErrorResponse.error.statusCode === 400) {
              this.alert = {
                ...this.alert,
                isShown: true,
                alertTitle: ALERT_AUTH.signup.error.alertTitle,
                alertMessage: httpErrorResponse.error.message
              }
            }
          }
        })
    }
  }

  googleAuth() {
    this.authService.socialAuth.authState.subscribe({
      next: (user) => {
        if (isExists(user)) {
          this.submitForm = false
          this.isLoading = true
          this.user = user
          this.authService
            .authWithGoogle(this.user.idToken)
            // .pipe(concatMap(() => this.authService.getAuthUserInfo()))
            .subscribe({
              next: (response) => {
                this.submitForm = true
                this.loggedIn = true
                this.isLoading = false
                this.authService.token.saveToken(response)

                this.alert = {
                  isShown: true,
                  alertTitle: ALERT_AUTH.signup.success.alertTitle,
                  alertType: 'success',
                  alertMessage:
                    ALERT_AUTH.signup.success.alertMessage +
                    this.registerForm.value.email
                }
                setTimeout(() => {
                  this.router.navigate([MYSPACE_ROUTES.HOME])
                  clearTimeout(this.timer)
                }, GLOBAL_CONSTANTS.AUTH_TIMEOUT_LOGIN)
              },
              error: (err) => {
                this.submitForm = true
                this.isLoading = false
                this.alert = {
                  isShown: true,
                  alertTitle: ALERT_AUTH.signup.error.alertTitle,
                  alertType: 'error',
                  alertMessage: err.error.message
                }
              }
            })
        }
      }
    })
  }
  ngOnDestroy(): void {
    window.clearTimeout(this.timer)
  }
}

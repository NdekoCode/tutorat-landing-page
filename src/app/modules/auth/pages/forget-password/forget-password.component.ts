import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { emailValidator } from 'src/app/core/utilities/forms'
import { Alert, Timer } from 'src/app/core/utilities/types'
import { AuthService } from 'src/app/shared/services/auth/auth.service'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html'
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private authService: AuthService
  ) {}
  forgetPasswordForm!: FormGroup

  alert: Alert = {
    isShown: false,
    alertType: 'error',
    alertTitle: '',
    alertMessage: ''
  }
  timer: Timer
  submitForm: boolean = false
  isLoading: boolean = false
  ngOnInit() {
    this.forgetPasswordForm = this._fb.group({
      ...emailValidator
    })
  }

  saveEmail() {
    this.submitForm = false
    this.isLoading = true
    if (this.forgetPasswordForm.valid) {
      this.authService
        .sendResetPasswordToken(this.forgetPasswordForm.value)
        .subscribe({
          next: (response) => {
            this.submitForm = true
            this.isLoading = false

            this.alert = {
              isShown: true,
              alertTitle: 'Demande de reinitialisation de mot de passe reussie',
              alertType: 'success',
              alertMessage:
                "Un email de pour la la reinitialisation de votre mot de passe vous a été envoyer à l'adresse " +
                this.forgetPasswordForm.value.email
            }
          },
          error: (httpErrorResponse) => {
            this.submitForm = true
            this.isLoading = false
            this.alert = {
              isShown: true,
              alertTitle: 'Demande de reinitialisation de mot de passe echouer',
              alertType: 'error',
              alertMessage: httpErrorResponse.error.message
            }
          }
        })
    }
  }
  ngOnDestroy(): void {
    window.clearTimeout(this.timer)
  }
}

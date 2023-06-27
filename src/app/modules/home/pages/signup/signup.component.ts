import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { GLOBAR_CONSTANTS } from 'src/app/core/utilities/constants'
import {
  emailValidator,
  passwordValidator,
  phoneValidator
} from 'src/app/core/utilities/forms'
import { Alert, Timer } from 'src/app/core/utilities/types'
import { AuthService } from 'src/app/shared/services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit, OnDestroy {
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService
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
  public registerForm!: FormGroup
  isChange: boolean = false
  viewPassword() {
    this.isChange = !this.isChange
  }
  ngOnInit(): void {
    this.registerForm = this._fb.group({
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      ...phoneValidator,
      ...emailValidator,
      ...passwordValidator,
      confirmPassword: ['', [Validators.required]]
    })
  }
  saveRegisterForm() {
    this.submitForm = false
    this.isLoading = true
    if (this.registerForm.valid) {
      this._authService
        .signup(this.registerForm.value)

        .subscribe({
          next: (response) => {
            this.submitForm = true
            this.alert = {
              isShown: true,
              alertTitle: 'Inscription faite avec succés',
              alertType: 'success',
              alertMessage:
                "Un email de verification vous a été envoyer à l'adresse " +
                this.registerForm.value.email
            }
            this.timer = window.setTimeout(() => {
              this._router.navigate(['/login'])
              window.clearTimeout(this.timer)
            }, GLOBAR_CONSTANTS.AUTH_TIMEOUT)
            this.isLoading = false
          },
          error: (httpErrorResponse) => {
            this.submitForm = true
            this.isLoading = false
            if (httpErrorResponse.error.statusCode === 409) {
              this.alert = {
                isShown: true,
                alertTitle: 'Votre inscription est revoquer',
                alertType: 'error',
                alertMessage: httpErrorResponse.error.message
              }
            } else if (httpErrorResponse.error.statusCode === 400) {
              this.alert = {
                ...this.alert,
                isShown: true,
                alertTitle: 'Votre inscription est revoquer',
                alertMessage: httpErrorResponse.error.message
              }
            }
          }
        })
    }
  }
  ngOnDestroy(): void {
    window.clearTimeout(this.timer)
  }
}

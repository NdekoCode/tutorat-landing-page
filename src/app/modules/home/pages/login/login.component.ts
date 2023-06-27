import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { emailValidator, passwordValidator } from 'src/app/core/utilities/forms'
import { Alert, Timer } from 'src/app/core/utilities/types'
import { AuthService } from 'src/app/shared/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  alert: Alert = {
    isShown: false,
    alertType: 'error',
    alertTitle: '',
    alertMessage: ''
  }
  timer: Timer
  submitForm: boolean = false
  isLoading: boolean = false
  userLogin = {
    email: '',
    password: ''
  }
  isChange: boolean = false
  public loginForm!: FormGroup
  constructor(private _fb: FormBuilder, private _authService: AuthService) {}
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
    this.isLoading = true
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.isLoading = false
          this.alert = {
            isShown: true,
            alertTitle: 'Connexion reussis',
            alertType: 'success',
            alertMessage:
              'Vous vous etes connecter avec succés, Ravis de vous revoir'
          }
        },
        error: (err) => {
          this.isLoading = false
        }
      })
    }
  }
}

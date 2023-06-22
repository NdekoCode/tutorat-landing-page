import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { emailValidator, passwordValidator } from 'src/app/core/utilities/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  userLogin = {
    email: '',
    password: ''
  }
  isChange: boolean = false
  public loginForm!: FormGroup
  constructor(private _fb: FormBuilder) {}
  viewPassword() {
    this.isChange = !this.isChange
  }
  ngOnInit() {
    this.loginForm = this._fb.group({
      ...emailValidator,
      ...passwordValidator
    })
  }
}

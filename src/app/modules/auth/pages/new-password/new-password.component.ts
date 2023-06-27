import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { passwordValidator } from 'src/app/core/utilities/forms'
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html'
})
export class NewPasswordComponent implements OnInit {
  constructor(private _fb: FormBuilder) {}
  userPassword = {
    password: '',
    confpassword: ''
  }
  isChange: boolean = false
  public newPasswordForm!: FormGroup
  viewPassword() {
    this.isChange = !this.isChange
  }
  ngOnInit(): void {
    this.newPasswordForm = this._fb.group({
      ...passwordValidator,
      confpassword: ['', [Validators.required]]
    })
  }
  saveNewPassword() {
    // eslint-disable-next-line no-console
    console.log(this.newPasswordForm)
  }
}

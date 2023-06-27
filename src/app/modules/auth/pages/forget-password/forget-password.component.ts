import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { emailValidator } from 'src/app/core/utilities/forms'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html'
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _router: Router) {}
  forgetPasswordForm!: FormGroup
  ngOnInit() {
    this.forgetPasswordForm = this._fb.group({
      ...emailValidator
    })
  }
  saveEmail() {
    // eslint-disable-next-line no-console
    console.log(this.forgetPasswordForm)
    this._router.navigate(['/verify-password'])
  }
}

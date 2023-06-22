import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import {
  emailValidator,
  passwordValidator,
  phoneValidator
} from 'src/app/core/utilities/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  constructor(private _fb: FormBuilder, private _router: Router) {}
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
      confpassword: ['', [Validators.required]]
    })
  }
  saveRegisterForm() {
    // eslint-disable-next-line no-console
    console.dir(this.registerForm)
    this._router.navigate(['/login'])
  }
}

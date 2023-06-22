import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.component.html'
})
export class VerifyPasswordComponent implements OnInit {
  public verifyForm!: FormGroup
  constructor(private _fb: FormBuilder, private _router: Router) {}

  confirmCode() {
    this._router.navigate(['/confirmation'])
  }
  ngOnInit(): void {
    this.verifyForm = this._fb.group({
      input1: ['', [Validators.required, Validators.maxLength(1)]],
      input2: ['', [Validators.required, Validators.maxLength(1)]],
      input3: ['', [Validators.required, Validators.maxLength(1)]],
      input4: ['', [Validators.required, Validators.maxLength(1)]]
    })
  }
}

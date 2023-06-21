import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  public registerForm!: FormGroup
  userLogin = {
    email: '',
    password: ''
  }
  isChange: boolean = false
  firstName = new FormControl()
  lastName = new FormControl()
  phoneNumber = new FormControl()
  email = new FormControl()
  password = new FormControl()
  confpassword = new FormControl()
  viewPassword() {
    this.isChange = !this.isChange
  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      email: this.email,
      password: this.password,
      confpassword: this.confpassword
    })
  }
  saveRegisterForm() {
    // eslint-disable-next-line no-console
    console.dir(this.registerForm)
  }
}

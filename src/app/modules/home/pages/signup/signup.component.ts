import { Component } from '@angular/core'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  userLogin = {
    email: '',
    password: ''
  }
  isChange: boolean = false
  viewPassword() {
    this.isChange = !this.isChange
  }
}

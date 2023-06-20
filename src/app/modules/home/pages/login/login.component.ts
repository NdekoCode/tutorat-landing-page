import { Component } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userLogin = {
    email: '',
    password: ''
  }
  isChange: boolean = false
  viewPassword() {
    this.isChange = !this.isChange
  }
}

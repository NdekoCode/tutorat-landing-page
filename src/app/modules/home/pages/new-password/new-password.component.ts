import { Component } from '@angular/core'
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html'
})
export class NewPasswordComponent {
  userPassword = {
    password: '',
    confpassword: ''
  }
  isChange: boolean = false
  viewPassword() {
    this.isChange = !this.isChange
  }
}

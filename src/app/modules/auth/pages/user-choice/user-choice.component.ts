import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { throwError } from 'rxjs'
import { AUTH_ROUTES, MYSPACE_ROUTES } from 'src/app/core/routes/routes'
import { Alert, Timer } from 'src/app/core/utilities/types'
import { UserService } from '../../../../shared/services/user/user.service'

@Component({
  selector: 'app-user-choice',
  templateUrl: './user-choice.component.html',
  styleUrls: ['./user-choice.component.scss']
})
export class UserChoiceComponent implements OnInit {
  alert: Alert = {
    isShown: false,
    alertType: 'error',
    alertTitle: '',
    alertMessage: ''
  }
  timer: Timer
  submitForm: boolean = false
  isLoading: boolean = false
  isChange: boolean = false
  choiceForm!: FormGroup
  userChoice: string = 'client'
  constructor(
    private _fb: FormBuilder,
    protected router: Router,
    private userService: UserService
  ) {}
  saveChoiceForm() {
    if (this.choiceForm.valid) {
      if (this.choiceForm.value.userChoice === 'tutor') {
        this.userService.makeMeTutor().subscribe({
          next: (response) => {
            this.router.navigate([AUTH_ROUTES.TUTOR_FORM])
          },
          error: (error) => {
            throwError(error)
          }
        })
      } else {
        this.router.navigate([MYSPACE_ROUTES.HOME])
      }
    }
  }
  ngOnInit() {
    this.choiceForm = this._fb.group({
      userChoice: ['client']
    })
  }
  saveUserChoice(userChoice: string) {
    this.userChoice = userChoice
  }
}

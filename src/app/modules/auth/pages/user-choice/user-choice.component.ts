/* eslint-disable max-params */
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { AUTH_ROUTES, MYSPACE_ROUTES } from 'src/app/core/routes/routes'
import { Alert, Timer, User } from 'src/app/core/utilities/types'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'
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
  user!: User
  timer: Timer
  submitForm: boolean = false
  isLoading: boolean = false
  isChange: boolean = false
  choiceForm!: FormGroup
  userChoice: string = 'client'
  constructor(
    private _fb: FormBuilder,
    protected router: Router,
    private userService: UserService,
    private tutorService: TutorService
  ) {}

  ngOnInit() {
    this.choiceForm = this._fb.group({
      userChoice: ['client']
    })
    this.userService.getUserAuth().subscribe((user) => {
      this.user = user as User
      if (
        this.tutorService.meIsTutor(this.user) &&
        !this.tutorService.tutorCompletedProfile(this.user)
      ) {
        this.router.navigate([AUTH_ROUTES.TUTOR_FORM])
      }
    })
  }

  saveChoiceForm() {
    this.isLoading = true
    if (this.choiceForm.valid) {
      if (this.choiceForm.value.userChoice === 'tutor') {
        this.userService.makeMeTutor().subscribe({
          next: (response) => {
            this.isLoading = false
            this.router.navigate([AUTH_ROUTES.TUTOR_FORM])
          },
          error: (error) => {
            this.isLoading = false
          }
        })
      } else {
        this.router.navigate([MYSPACE_ROUTES.HOME])
      }
    }
  }
  saveUserChoice(userChoice: string) {
    this.userChoice = userChoice
  }
}

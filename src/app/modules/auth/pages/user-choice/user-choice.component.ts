import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { Alert, Timer } from 'src/app/core/utilities/types'

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
  constructor(private _fb: FormBuilder, protected _router: Router) {}
  saveChoiceForm() {
    if (this.choiceForm.valid) {
      if (this.choiceForm.value.userChoice === 'tutor') {
        this._router.navigate(['/tutors-form'])
      } else {
        this._router.navigate(['/myspace'])
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

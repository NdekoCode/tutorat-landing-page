import { FormGroup, Validators } from '@angular/forms'
import { ErrorValidationType } from './types'

export const passwordValidator = {
  password: [
    '',
    [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(255),
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#\.])[A-Za-z\d@$!%*?&#\.]{8,}$/
      )
    ]
  ]
}
export const emailValidator = {
  email: [
    '',
    [
      Validators.required,
      Validators.email,
      Validators.pattern(
        /^[a-z]{1,}(\w|[\-\.])*@[a-z]{2,}(\w|[\-\.])*\.[a-z]{2,5}$/
      ),
      Validators.maxLength(255)
    ]
  ]
}

export const phoneValidator = {
  phoneNumber: [
    '',
    [
      Validators.required,
      Validators.pattern(
        /^(\+243|0)?([\s.-])?(8[0124589]|97|99)([\s.-])?(\d{3}[\s.-]?)?\d{3}[\s.-]?\d{3}$|^(\+243|0)?([\s.-])?\d{3}([\s.-])?\d{3}([\s.-])?\d{3}$/
      ),
      Validators.minLength(2)
    ]
  ]
}

export function ConfirmedValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName]
    const matchingControl = formGroup.controls[matchingControlName]
    if (
      matchingControl.errors &&
      !matchingControl.errors?.['confirmedValidator']
    ) {
      return
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true })
    } else {
      matchingControl.setErrors(null)
    }
  }
}

export const hourlyRateErrorsInput: ErrorValidationType[] = [
  {
    key: 'required',
    message: 'hourlyRate is required'
  }
]

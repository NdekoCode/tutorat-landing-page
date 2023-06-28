import { Validators } from '@angular/forms'

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

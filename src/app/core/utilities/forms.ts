import { Validators } from '@angular/forms'

export const passwordValidator = {
  password: [
    '',
    [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(255),
      Validators.pattern(/^S*(?=S{8,})(?=S*[a-z])(?=S*[A-Z])(?=S*[d])S*$/)
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
        /^((0|08)[0-9]|09[78])([.-]?[0-9]{3}){2}([.-]?[0-9]{2}|[.-]?[0-9]{4})$|^(\+243)(8[0124589]|97|99)([.-]?[0-9]{3}){2}[.-]?[0-9]{1}$|^(\+243)(81|82|84|85|88|89)([.-]?[0-9]{3}){2}[.-]?[0-9]{1}$|^(\+243)(90|91|97)([.-]?[0-9]{3}){2}[.-]?[0-9]{1}$/
      ),
      Validators.minLength(2)
    ]
  ]
}

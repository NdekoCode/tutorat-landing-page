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
  email: ['', Validators.required, Validators.email, Validators.maxLength(255)]
}

export const phoneValidator = {
  phoneNumber: [
    '',
    [
      Validators.required,
      Validators.pattern(
        /^0([\.\-\\s])?((80)|(81)|(82)|(84)|(85)|(88)|(89)|(97)|(99))\d{1}(([\.\-\\s])?\d{3}){2}$/i
      ),
      Validators.minLength(2)
    ]
  ]
}

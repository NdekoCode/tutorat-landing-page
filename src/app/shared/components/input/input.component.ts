import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ErrorValidationType } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type: string = 'text'
  @Input() placeholder: string = ''
  @Input() required: boolean = false
  @Input() readonly: boolean = false
  @Input() label: string = ''
  @Input() className: string = ''
  @Input() id: string = ''
  @Input() formControlItem: FormControl = new FormControl()
  @Input() errorsInput!: ErrorValidationType[]

  displayInputErrors() {
    const { dirty, touched, errors } = this.formControlItem
    return dirty && touched && errors
  }
}

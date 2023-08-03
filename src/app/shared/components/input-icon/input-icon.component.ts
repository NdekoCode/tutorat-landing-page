import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { ErrorValidationType } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-input-icon',
  templateUrl: './input-icon.component.html',
  styleUrls: ['./input-icon.component.scss']
})
export class InputIconComponent {
  @Input() type: string = 'text'
  @Input() placeholder: string = ''
  @Input() required: boolean = false
  @Input() readonly: boolean = false
  @Input() label: string = ''
  @Input() className: string = ''
  @Input() id: string = ''
  @Input() idError: string = ''
  @Input() formControlItem: FormControl = new FormControl('')
  @Input() errorsInput!: ErrorValidationType[]

  displayInputErrors() {
    const { dirty, touched, errors } = this.formControlItem
    return dirty && touched && errors
  }
}

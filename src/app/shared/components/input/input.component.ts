import { Component } from '@angular/core'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  inputType: string = 'text'
  placeholder: string = ''
  Inputname: string = ''
  value: string = ''
  id: string = ''
}

import { Component } from '@angular/core'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  inputType: string = 'text'
  placeholder: string = ''
  InputName: string = ''
  inputValue: string = ''
  id: string = ''
}

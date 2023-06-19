import { Component } from '@angular/core'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  inputType: string = 'text'
  placeholder: string = ''
  Inputname: string = ''
  value: string = ''
  id: string = ''
}

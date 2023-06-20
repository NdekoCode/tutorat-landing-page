import { Component } from '@angular/core'

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html'
})
export class InputContainerComponent {
  label: boolean = true
  labelText: string = ''
  labelFor: string = ''
}

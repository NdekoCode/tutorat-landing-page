import { Component } from '@angular/core'

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss']
})
export class InputContainerComponent {
  label: string = ''
  labelText: string = ''
  labelFor: string = ''
}

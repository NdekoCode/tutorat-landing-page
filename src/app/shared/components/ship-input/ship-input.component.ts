import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-ship-input',
  templateUrl: './ship-input.component.html',
  styleUrls: ['./ship-input.component.scss']
})
export class ShipInputComponent {
  @Input() chipsData: string[] = []
  chips: string[] = this.chipsData
  inputValue: FormControl = new FormControl('')

  addChip() {
    if (this.inputValue && !this.chips.includes(this.inputValue?.value)) {
      this.chips.push(this.inputValue?.value)
      this.inputValue?.setValue('')
    }
  }

  removeChip(chip: string) {
    const index = this.chips.indexOf(chip)
    if (index !== -1) {
      this.chips.splice(index, 1)
    }
  }
}

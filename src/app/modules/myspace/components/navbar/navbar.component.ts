import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() isActive: boolean = false
  @Output() isToggleActive = new EventEmitter<boolean>()
  toggleActive() {
    this.isActive = !this.isActive
    this.isToggleActive.emit(this.isActive)
  }
}

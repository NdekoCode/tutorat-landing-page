import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isActive: boolean = false

  @Output() isToggleActive = new EventEmitter<boolean>()
  toggleActive(toggleValue: boolean | null = null) {
    if (window.innerWidth <= 1024) {
      if (toggleValue !== null) {
        this.isActive = !!toggleValue
      } else {
        this.isActive = !this.isActive
      }
      this.isToggleActive.emit(this.isActive)
    }
  }
}

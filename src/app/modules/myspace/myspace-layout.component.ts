import { Component } from '@angular/core'

@Component({
  selector: 'app-myspace-layout',
  templateUrl: './myspace-layout.component.html'
})
export class MyspaceLayoutComponent {
  isActive = false
  toggleActive() {
    this.isActive = !this.isActive
  }
}
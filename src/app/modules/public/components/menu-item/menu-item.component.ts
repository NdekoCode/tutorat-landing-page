import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @ViewChild('navContainer', { static: true }) navContainerRef!: ElementRef

  isActive: boolean = false

  toggleNav() {
    this.isActive = !this.isActive
  }
}

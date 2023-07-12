import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @ViewChild('navContainer', { static: true }) navContainerRef!: ElementRef

  isActive: boolean = false

  ngOnInit(): void {
    const navContainer = this.navContainerRef.nativeElement

    new ResizeObserver((entries) => {
      if (entries[0].contentRect.width <= 900) {
        navContainer.style.transition = 'transform 0.4s ease-out'
        navContainer.style.animationDelay = '0.35s ease-out'
      } else {
        navContainer.style.animation = 'none'
      }
    }).observe(document.body)
  }
  toggleNav() {
    this.isActive = !this.isActive
  }
}

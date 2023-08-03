import { Directive, HostBinding, HostListener } from '@angular/core'

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  @HostBinding('class.scroll-nav') scrollNav!: boolean
  @HostListener('window:scroll') onScroll() {
    if (window.scrollY >= 150) {
      this.scrollNav = true
    } else {
      this.scrollNav = false
    }
  }
}

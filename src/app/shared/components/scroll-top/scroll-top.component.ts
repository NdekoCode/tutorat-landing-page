import { Component } from '@angular/core'

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html'
})
export class ScrollTopComponent {
  // eslint-disable-next-line class-methods-use-this
  topFunction() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }
}

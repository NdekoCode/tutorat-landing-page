import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[data-tip]'
})
export class DataTipDirective implements OnInit {
  @Input('data-tip') dataTip!: string

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.setAttribute('data-tip', this.dataTip)
  }
}

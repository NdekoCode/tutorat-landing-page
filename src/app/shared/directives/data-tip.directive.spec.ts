import { ElementRef } from '@angular/core'
import { DataTipDirective } from './data-tip.directive'

describe('DataTipDirective', () => {
  it('should create an instance', () => {
    const directive = new DataTipDirective(new ElementRef(''))
    expect(directive).toBeTruthy()
  })
})

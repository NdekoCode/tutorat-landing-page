import { TestBed } from '@angular/core/testing'

import { ToggleVideService } from './toggle-vide.service'

describe('ToggleVideService', () => {
  let service: ToggleVideService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ToggleVideService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

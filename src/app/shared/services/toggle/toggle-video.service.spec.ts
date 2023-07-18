import { TestBed } from '@angular/core/testing'

import { ToggleVideoService } from './toggle-video.service'

describe('ToggleVideoService', () => {
  let service: ToggleVideoService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ToggleVideoService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

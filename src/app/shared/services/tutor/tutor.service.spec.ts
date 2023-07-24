import { TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ApiConfigService } from '../api-config/api-config.service'
import { TutorService } from './tutor.service'

describe('TutorService', () => {
  let service: TutorService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiConfigService]
    })
    service = TestBed.inject(TutorService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

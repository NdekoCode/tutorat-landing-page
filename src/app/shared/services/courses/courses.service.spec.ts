import { TestBed } from '@angular/core/testing'

import { HttpClientModule } from '@angular/common/http'
import { ApiConfigService } from '../api-config/api-config.service'
import { CoursesService } from './courses.service'

describe('CoursesService', () => {
  let service: CoursesService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiConfigService]
    })
    service = TestBed.inject(CoursesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

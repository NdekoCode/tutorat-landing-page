import { TestBed } from '@angular/core/testing'

import { HttpClientModule } from '@angular/common/http'
import { ApiConfigService } from '../api-config/api-config.service'
import { TokenService } from './token.service'

describe('TokenService', () => {
  let service: TokenService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiConfigService]
    })
    service = TestBed.inject(TokenService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

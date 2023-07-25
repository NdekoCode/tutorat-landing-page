import { TestBed } from '@angular/core/testing'

import { HttpClient, HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { VerifyTutorGuard } from './verify-tutor.guard'

describe('VerifyTutorGuard', () => {
  let guard: VerifyTutorGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule],
      providers: [HttpClient]
    })
    guard = TestBed.inject(VerifyTutorGuard)
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})

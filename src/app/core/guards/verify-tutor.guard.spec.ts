import { TestBed } from '@angular/core/testing'

import { VerifyTutorGuard } from './verify-tutor.guard'

describe('VerifyTutorGuard', () => {
  let guard: VerifyTutorGuard

  beforeEach(() => {
    TestBed.configureTestingModule({})
    guard = TestBed.inject(VerifyTutorGuard)
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})

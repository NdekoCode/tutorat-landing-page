import { TestBed } from '@angular/core/testing'

import {
  GoogleLoginProvider,
  SocialAuthServiceConfig
} from '@abacritt/angularx-social-login'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { AuthService } from 'src/app/shared/services/auth/auth.service'
import { AuthGuard } from './auth.guard'

describe('AuthGuard', () => {
  let guard: AuthGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule],
      providers: [
        AuthService,
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider('')
              }
            ]
          } as SocialAuthServiceConfig
        }
      ]
    })
    guard = TestBed.inject(AuthGuard)
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})

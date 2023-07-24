import { TestBed } from '@angular/core/testing'

import {
  GoogleLoginProvider,
  SocialAuthServiceConfig
} from '@abacritt/angularx-social-login'
import { HttpClientModule } from '@angular/common/http'
import { AuthService } from './auth.service'

describe('AuthService', () => {
  let service: AuthService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
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
    service = TestBed.inject(AuthService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

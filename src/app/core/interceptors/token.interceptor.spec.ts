import { TestBed } from '@angular/core/testing'

import { SocialAuthService } from '@abacritt/angularx-social-login'
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http'
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'
import { InjectionToken } from '@angular/core'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { AuthService } from 'src/app/shared/services/auth/auth.service'
import { TokenService } from 'src/app/shared/services/auth/token.service'
import { environment } from 'src/environments/environment'
import { TokenInterceptor } from './token.interceptor'

xdescribe('TokenInterceptor', () => {
  let httpMock: HttpTestingController
  let httpClient: HttpClient
  let tokenService: TokenService
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        SocialAuthService
      ],
      providers: [
        TokenInterceptor,
        TokenService,
        AuthService,
        HttpClient,
        TokenService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        { provide: InjectionToken, useValue: {} }
      ]
    })
  })
  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor)
    expect(interceptor).toBeTruthy()
  })
})

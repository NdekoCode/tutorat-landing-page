import { TestBed } from '@angular/core/testing'

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { InjectionToken } from '@angular/core'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { ApiConfigService } from 'src/app/shared/services/api-config/api-config.service'
import { TokenService } from 'src/app/shared/services/auth/token.service'
import { environment } from 'src/environments/environment'
import { AuthInterceptor } from './auth.interceptor'
import { TokenInterceptor } from './token.interceptor'

describe('AuthInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ],
      providers: [
        HttpClient,
        AuthInterceptor,
        TokenInterceptor,
        ApiConfigService,
        TokenService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        { provide: InjectionToken, useValue: {} }
      ]
    })
  )

  it('should be created', () => {
    const interceptor: AuthInterceptor = TestBed.inject(AuthInterceptor)
    expect(interceptor).toBeTruthy()
  })
})

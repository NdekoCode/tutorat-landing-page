import { TestBed } from '@angular/core/testing'

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http'
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'
import { TokenService } from 'src/app/shared/services/auth/token.service'
import { TokenInterceptor } from './token.interceptor'

describe('TokenInterceptor', () => {
  let httpMock: HttpTestingController
  let httpClient: HttpClient
  let tokenService: TokenService
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TokenInterceptor,
        TokenService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
      ]
    })

    httpMock = TestBed.inject(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
    tokenService = TestBed.inject(TokenService)
  })
  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor)
    expect(interceptor).toBeTruthy()
  })
  it('should add token to request headers', () => {
    const token = 'dummyToken'
    jest.spyOn(tokenService, 'tokenExists').mockReturnValue(true)
    jest
      .spyOn(tokenService, 'getToken')
      .mockReturnValue({ accessToken: token, refreshToken: '' })

    httpClient.get('/api/data').subscribe()

    const httpRequest = httpMock.expectOne('/api/data')
    expect(httpRequest.request.headers.get('Authorization')).toBe(
      `Bearer ${token}`
    )
  })
  afterEach(() => {
    httpMock.verify()
  })
})
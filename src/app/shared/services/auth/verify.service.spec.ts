xdescribe('VerifyService', () => {
  // let service: VerifyService

  // let httpMock: HttpTestingController
  // const apiConfigSpy = jest.spyOn(ApiConfigService.prototype, 'url', 'get')
  // apiConfigSpy.mockReturnValue(environment.BASE_URL)

  // beforeEach(() => {
  // TestBed.configureTestingModule({
  // imports: [HttpClientTestingModule]
  // providers: [VerifyService, { useValue: { url: environment.BASE_URL } }]
  // })
  // service = TestBed.inject(VerifyService)
  // httpMock = TestBed.inject(HttpTestingController)
  // })

  xit('should be created', () => {
    // expect(service).toBeTruthy()
  })
  /*
  xit('should send a GET request to verify user email', () => {
    const token = 'testToken'
    const expectedResponse = { message: 'Email verified successfully' }

    service.verifyUser(token).subscribe((response) => {
      expect(response).toEqual(expectedResponse)
    })

    const req = httpMock.expectOne(
      `${apiConfigSpy.mock.results[0].value}/auth/verify-email?token=${token}`
    )
    expect(req.request.method).toBe('GET')

    req.flush(expectedResponse)
  })

  xit('should send a POST request to verify reset password token', () => {
    const token = 'testToken'
    const expectedResponse = { message: 'Reset password token is valid' }

    service.verifyResetPasswordToken(token).subscribe((response) => {
      expect(response).toEqual(expectedResponse)
    })

    const req = httpMock.expectOne(
      `${apiConfigSpy.mock.results[0].value}/auth/validate-reset-password-token?token=${token}`
    )
    expect(req.request.method).toBe('POST')

    req.flush(expectedResponse)
  })
  afterEach(() => {
    httpMock.verify()
  }) */
})

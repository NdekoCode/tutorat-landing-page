import { TestBed } from '@angular/core/testing'

import { HttpClientModule } from '@angular/common/http'
import { InjectionToken } from '@angular/core'
import { AngularFireModule } from '@angular/fire/compat'
import {
  AngularFireStorage,
  AngularFireStorageModule
} from '@angular/fire/compat/storage'
import { environment } from 'src/environments/environment'
import { ApiConfigService } from '../api-config/api-config.service'
import { UploadService } from '../upload.service'
import { TokenService } from './token.service'

describe('TokenService', () => {
  let service: TokenService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ],
      providers: [
        ApiConfigService,
        UploadService,
        AngularFireStorage,
        { provide: InjectionToken, useValue: {} },
        TokenService
      ]
    })
    service = TestBed.inject(TokenService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

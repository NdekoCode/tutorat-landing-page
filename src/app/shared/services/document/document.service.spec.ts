import { TestBed } from '@angular/core/testing'

import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { environment } from 'src/environments/environment'
import { ApiConfigService } from '../api-config/api-config.service'
import { DocumentService } from './document.service'

describe('DocumentService', () => {
  let service: DocumentService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ],
      providers: [HttpClient, ApiConfigService]
    })
    service = TestBed.inject(DocumentService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

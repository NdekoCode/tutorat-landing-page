import { TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { RouterModule } from '@angular/router'
import { environment } from 'src/environments/environment'
import { ApiConfigService } from '../api-config/api-config.service'
import { TutorService } from './tutor.service'

describe('TutorService', () => {
  let service: TutorService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        RouterModule
      ],
      providers: [ApiConfigService]
    })
    service = TestBed.inject(TutorService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

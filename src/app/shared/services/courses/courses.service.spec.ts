import { TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { environment } from 'src/environments/environment'
import { ApiConfigService } from '../api-config/api-config.service'
import { CoursesService } from './courses.service'

describe('CoursesService', () => {
  let service: CoursesService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ],
      providers: [ApiConfigService]
    })
    service = TestBed.inject(CoursesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})

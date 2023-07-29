import { TestBed } from '@angular/core/testing'

import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { RouterModule } from '@angular/router'
import { environment } from 'src/environments/environment'
import { VerifyTutorGuard } from './verify-tutor.guard'

describe('VerifyTutorGuard', () => {
  let guard: VerifyTutorGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule,
        RouterModule
      ],
      providers: [HttpClient]
    })
    guard = TestBed.inject(VerifyTutorGuard)
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })
})

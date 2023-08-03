import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { environment } from 'src/environments/environment.development'
import { ApiConfigService } from './api-config.service'

describe('ApiConfigService', () => {
  let service: ApiConfigService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ],
      providers: [ApiConfigService]
    })
    service = TestBed.inject(ApiConfigService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should have the correct API URL', () => {
    expect(service.url.replace(/\/$/, '')).toBe(
      environment.BASE_URL.replace(/\/$/, '')
    ) // Remplacez YOUR_API_URL par la valeur attendue
  })
})

import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { environment } from 'src/environments/environment'
import { OTPVerificationComponent } from './otp-verification.component'

describe('VerifyPasswordComponent', () => {
  let component: OTPVerificationComponent
  let fixture: ComponentFixture<OTPVerificationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OTPVerificationComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(OTPVerificationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

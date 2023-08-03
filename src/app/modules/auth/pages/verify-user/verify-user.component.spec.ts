import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { environment } from 'src/environments/environment'
import { VerifyUserComponent } from './verify-user.component'

xdescribe('VerifyComponent', () => {
  let component: VerifyUserComponent
  let fixture: ComponentFixture<VerifyUserComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyUserComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(VerifyUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})

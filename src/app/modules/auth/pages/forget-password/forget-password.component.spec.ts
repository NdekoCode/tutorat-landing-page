import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { environment } from 'src/environments/environment'
import { ForgetPasswordComponent } from './forget-password.component'

xdescribe('ForgetPasswordComponent', () => {
  let component: ForgetPasswordComponent
  let fixture: ComponentFixture<ForgetPasswordComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgetPasswordComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(ForgetPasswordComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

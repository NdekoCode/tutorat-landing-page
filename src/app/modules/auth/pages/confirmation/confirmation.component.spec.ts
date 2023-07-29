import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { environment } from 'src/environments/environment'
import { ConfirmationComponent } from './confirmation.component'

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent
  let fixture: ComponentFixture<ConfirmationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(ConfirmationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

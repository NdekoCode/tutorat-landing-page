import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { ActivatedRoute } from '@angular/router'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'
import { environment } from 'src/environments/environment'
import { TutorsComponent } from './tutors.component'

describe('TutorsComponent', () => {
  let component: TutorsComponent
  let fixture: ComponentFixture<TutorsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorsComponent],
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ],
      providers: [
        HttpClient,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: 1 }
            }
          }
        },
        TutorService
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(TutorsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'
import { environment } from 'src/environments/environment'
import { ViewTutorComponent } from './view-tutor.component'

xdescribe('ViewTutorComponent', () => {
  let component: ViewTutorComponent
  let fixture: ComponentFixture<ViewTutorComponent>
  let tutorService: TutorService
  let suggestionTutors: ITutor[]
  beforeEach(async () => {
    const activatedRouteMock = {
      snapshot: {
        params: { id: 123 } // La valeur que nous souhaitons pour le paramètre id
      },
      fragment: {
        subscribe: jest.fn()
      }
    }

    const tutor: ITutor = {
      userId: 1,
      bio: 'Bio',
      hourlyRate: 50,
      transport: 1,
      specialization: [
        { id: 1, name: 'Math', description: '' },
        { name: 'Science', id: 1, description: '' }
      ],
      document: [],
      video: {
        id: 1,
        url: 'video-url',
        thumbnail: '',
        description: '',
        tutorId: 1
      },
      user: {
        id: 1,
        gender: 'male',
        firstName: 'Arick',
        lastName: 'Bul',
        avatar: 'image.jpg',
        address: {
          id: 1,
          country: 'State',
          city: 'City',
          userId: 1
        }
      }
    }
    suggestionTutors = [tutor]

    await TestBed.configureTestingModule({
      declarations: [ViewTutorComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        TutorService
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(ViewTutorComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

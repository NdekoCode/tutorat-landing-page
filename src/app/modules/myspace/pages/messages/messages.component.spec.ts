import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { of } from 'rxjs'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'
import { environment } from 'src/environments/environment'
import { MessagesComponent } from './messages.component'

describe('MessagesComponent', () => {
  let component: MessagesComponent
  let fixture: ComponentFixture<MessagesComponent>

  let tutorService: TutorService
  let tutorsMessage: ITutor[]
  beforeEach(async () => {
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
    tutorsMessage = [tutor]

    const tutorServiceMock = {
      getTutors: jest.fn().mockReturnValue(of(tutorsMessage))
    }
    await TestBed.configureTestingModule({
      declarations: [MessagesComponent],
      imports: [
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ],
      providers: [TutorService]
    }).compileComponents()

    fixture = TestBed.createComponent(MessagesComponent)
    component = fixture.componentInstance
    tutorService = TestBed.inject(TutorService)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

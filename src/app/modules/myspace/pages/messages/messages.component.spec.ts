import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ITutor } from 'src/app/core/utilities/interfaces'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'
import { MessagesComponent } from './messages.component'

describe('MessagesComponent', () => {
  let component: MessagesComponent
  let fixture: ComponentFixture<MessagesComponent>

  let tutorService: TutorService
  let tutorsMessage: ITutor[]
  beforeEach(async () => {
    const tutor: ITutor = {
      id: 1,
      firstName: 'Arick',
      lastName: 'Bul',
      age: 30,
      gender: 'male',
      email: 'arick.bul@zabibu.co',
      phone: '1234567890',
      image: 'image.jpg',
      address: {
        address: '123 Street',
        city: 'City',
        postalCode: '12345',
        state: 'State'
      },
      tutor: {
        bio: 'Bio',
        hourlyRate: 50,
        transport: 1,
        specialization: ['Math', 'Science'],
        video: {
          thumbnail: '',
          description: '',
          url: 'video-url'
        },
        address: {
          address: '123 Street',
          city: 'City',
          postalCode: '12345',
          state: 'State'
        }
      }
    }
    tutorsMessage = [tutor]

    const tutorServiceMock = {
      getLimitTutor: jest.fn().mockReturnValue(tutorsMessage)
    }
    await TestBed.configureTestingModule({
      declarations: [MessagesComponent],
      providers: [{ provide: TutorService, useValue: tutorServiceMock }]
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

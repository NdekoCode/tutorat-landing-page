import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'
import { ViewTutorComponent } from './view-tutor.component'

describe('ViewTutorComponent', () => {
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
    suggestionTutors = [tutor]

    const tutorServiceMock = {
      getSingleTutor: jest.fn().mockReturnValue(tutor),
      getSuggestionTutors: jest.fn().mockReturnValue(suggestionTutors)
    }

    await TestBed.configureTestingModule({
      declarations: [ViewTutorComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: TutorService, useValue: tutorServiceMock }
      ],
      imports: [RouterTestingModule]
    }).compileComponents()

    fixture = TestBed.createComponent(ViewTutorComponent)
    component = fixture.componentInstance
    tutorService = TestBed.inject(TutorService)

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

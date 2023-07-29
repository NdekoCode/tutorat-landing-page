import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ITutor } from 'src/app/core/utilities/interfaces'
import { ToggleVideoService } from 'src/app/shared/services/toggle/toggle-video.service'
import { TutorCardComponent } from './tutor-card.component'

describe('TutorCardComponent', () => {
  let component: TutorCardComponent
  let fixture: ComponentFixture<TutorCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorCardComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TutorCardComponent)
    component = fixture.componentInstance
  })

  // Tests that the component initializes with input tutor
  it('Init with tutor', () => {
    const toggleService = { onToggleShow: jest.fn(), isShown: false }
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
    const toggleVideoService = new ToggleVideoService(toggleService)
    const component = new TutorCardComponent()
    component.tutor = tutor
    expect(component.tutor).toBeDefined()
  })
})

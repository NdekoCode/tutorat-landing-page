import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TutorSuggestionCardComponent } from './tutor-suggestion-card.component'

describe('TutorSuggestionCardComponent', () => {
  let component: TutorSuggestionCardComponent
  let fixture: ComponentFixture<TutorSuggestionCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorSuggestionCardComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TutorSuggestionCardComponent)
    component = fixture.componentInstance
    component.tutor = {
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
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

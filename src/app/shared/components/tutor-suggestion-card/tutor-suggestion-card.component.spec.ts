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
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

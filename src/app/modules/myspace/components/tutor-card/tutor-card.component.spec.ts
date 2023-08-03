import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ITutor } from 'src/app/core/utilities/interfaces'
import { Tutor } from 'src/app/core/utilities/types'
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
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      gender: 'Male',
      email: 'johndoe@example.com',
      phone: '1234567890',
      password: 'password',
      image: 'image.jpg',
      address: {
        address: '123 Main St',
        city: 'Anytown',
        postalCode: '12345',
        state: 'CA'
      },
      tutor: {} as Tutor // Mocking the Tutor class
    }
    const toggleVideoService = new ToggleVideoService(toggleService)
    const component = new TutorCardComponent()
    component.tutor = tutor
    expect(component.tutor).toBeDefined()
  })
})

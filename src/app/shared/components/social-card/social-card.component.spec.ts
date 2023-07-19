import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { SocialCardComponent } from './social-card.component'

describe('SocialCardComponent', () => {
  let component: SocialCardComponent
  let fixture: ComponentFixture<SocialCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialCardComponent],
      imports: [FormsModule]
    }).compileComponents()

    fixture = TestBed.createComponent(SocialCardComponent)
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
    component.usersComment = []
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

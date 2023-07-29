import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { FormsModule } from '@angular/forms'
import { environment } from 'src/environments/environment'
import { SocialCardComponent } from './social-card.component'

describe('SocialCardComponent', () => {
  let component: SocialCardComponent
  let fixture: ComponentFixture<SocialCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialCardComponent],
      imports: [
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(SocialCardComponent)
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
    component.usersComment = []
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

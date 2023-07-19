import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { TutorService } from 'src/app/shared/services/tutor/tutor.service'
import { TutorsComponent } from './tutors.component'

describe('TutorsComponent', () => {
  let component: TutorsComponent
  let fixture: ComponentFixture<TutorsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: 1 }
            }
          }
        },
        TutorService
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(TutorsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

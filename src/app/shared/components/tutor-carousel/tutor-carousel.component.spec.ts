import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TutorCarouselComponent } from './tutor-carousel.component'

describe('TutorCarouselComponent', () => {
  let component: TutorCarouselComponent
  let fixture: ComponentFixture<TutorCarouselComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorCarouselComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TutorCarouselComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

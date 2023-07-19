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
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

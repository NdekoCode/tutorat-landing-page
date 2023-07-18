import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TutorsSupplementFormComponent } from './tutors-supplement-form.component'

describe('TutorsSupplementFormComponent', () => {
  let component: TutorsSupplementFormComponent
  let fixture: ComponentFixture<TutorsSupplementFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorsSupplementFormComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TutorsSupplementFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

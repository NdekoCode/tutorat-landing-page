import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { UserChoiceComponent } from './user-choice.component'

describe('UserChoiceComponent', () => {
  let component: UserChoiceComponent
  let fixture: ComponentFixture<UserChoiceComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserChoiceComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(UserChoiceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('test_valid_form_client', () => {
    const mockFormBuilder = new FormBuilder()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockRouter = { navigate: jest.fn() } as any as Router
    const component = new UserChoiceComponent(mockFormBuilder, mockRouter)

    component.ngOnInit()
    component.choiceForm.controls['userChoice'].setValue('client')

    component.saveChoiceForm()

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/myspace'])
  })

  it('test_valid_form_tutor', () => {
    const mockFormBuilder = new FormBuilder()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockRouter = { navigate: jest.fn() } as unknown as Router
    const component = new UserChoiceComponent(mockFormBuilder, mockRouter)

    component.ngOnInit()
    component.choiceForm.controls['userChoice'].setValue('tutor')

    component.saveChoiceForm()

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/auth/tutor-form'])
  })
})

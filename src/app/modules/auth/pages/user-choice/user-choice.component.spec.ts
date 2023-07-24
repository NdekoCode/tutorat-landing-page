import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { MYSPACE_ROUTES } from 'src/app/core/routes/routes'
import { UserChoiceComponent } from './user-choice.component'

describe('UserChoiceComponent', () => {
  let component: UserChoiceComponent
  let fixture: ComponentFixture<UserChoiceComponent>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mockRouter = { navigate: jest.fn() } as any as Router
  beforeEach(async () => {
    const activatedRouteMock = {
      snapshot: {
        params: { id: 123 } // Définissez ici la valeur que vous souhaitez pour le paramètre id
      }
    }
    await TestBed.configureTestingModule({
      declarations: [UserChoiceComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: Router, useValue: mockRouter },
        HttpClient,
        FormBuilder,
        Router
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(UserChoiceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('test_valid_form_client', () => {
    component.ngOnInit()
    component.choiceForm.controls['userChoice'].setValue('client')

    component.saveChoiceForm()

    expect(mockRouter.navigate).toHaveBeenCalledWith([MYSPACE_ROUTES.HOME])
  })

  it('test_valid_form_tutor', () => {
    const mockFormBuilder = new FormBuilder()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockRouter = { navigate: jest.fn() } as unknown as Router
    // const component = new UserChoiceComponent(mockFormBuilder, mockRouter)

    component.ngOnInit()
    component.choiceForm.controls['userChoice'].setValue('tutor')

    component.saveChoiceForm()

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/auth/tutor-form'])
  })
})

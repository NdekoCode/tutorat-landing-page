import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { MYSPACE_ROUTES } from 'src/app/core/routes/routes'
import { UserService } from 'src/app/shared/services/user/user.service'

import { UserChoiceComponent } from './user-choice.component'

xdescribe('UserChoiceComponent', () => {
  let component: UserChoiceComponent
  let fixture: ComponentFixture<UserChoiceComponent>

  const mockRouter = { navigate: jest.fn() }
  const userServiceMock = {
    makeMeTutor: jest.fn().mockReturnValue({ subscribe: jest.fn() })
  }

  beforeEach(async () => {
    const activatedRouteMock = {
      snapshot: {
        params: { id: 123 }
      }
    }

    await TestBed.configureTestingModule({
      declarations: [UserChoiceComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: Router, useValue: mockRouter },
        { provide: UserService, useValue: userServiceMock },
        FormBuilder
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
})

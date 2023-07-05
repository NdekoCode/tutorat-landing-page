import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { of, throwError } from 'rxjs'
import { SignupComponent } from './signup.component'

describe('SignupComponent', () => {
  let component: SignupComponent
  let fixture: ComponentFixture<SignupComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule]
    }).compileComponents()

    fixture = TestBed.createComponent(SignupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should initialize the register form', () => {
    expect(component.registerForm).toBeDefined()
    expect(component.registerForm.get('lastName')?.value).toEqual('')
    expect(component.registerForm.get('firstName')?.value).toEqual('')
    // Add assertions for other form controls that should be initialized
  })

  it('should make the form invalid if fields are empty', () => {
    component.registerForm.get('lastName')?.setValue('')
    component.registerForm.get('firstName')?.setValue('')
    // Set other form controls to empty values

    expect(component.registerForm.valid).toBeFalsy()
  })
  it('should make the form valid if all fields are filled correctly', () => {
    component.registerForm.get('lastName')?.setValue('Doe')
    component.registerForm.get('firstName')?.setValue('John')
    // Set other form controls to valid values

    expect(component.registerForm.valid).toBeTruthy()
  })
  it('should show the alert message after successful signup', () => {
    // Mock the signup method of AuthService to return a successful response
    jest.spyOn(component.authService, 'signup').mockReturnValue(of({}))

    component.saveRegisterForm()

    expect(component.submitForm).toBeTruthy()
    expect(component.alert.isShown).toBeTruthy()
    expect(component.alert.alertType).toEqual('success')
    // Add assertions for other properties of the alert object
  })

  it('should show the alert message if there is an error during signup', () => {
    // Mock the signup method of AuthService to return an error response
    const errorResponse = { error: { statusCode: 409, message: 'Conflict' } }
    jest
      .spyOn(component.authService, 'signup')
      .mockReturnValue(throwError(errorResponse))

    component.saveRegisterForm()

    expect(component.submitForm).toBeTruthy()
    expect(component.alert.isShown).toBeTruthy()
    expect(component.alert.alertType).toEqual('error')
    // Add assertions for other properties of the alert object
  })
  it('should navigate to login page after successful signup', () => {
    // Mock the signup method of AuthService to return a successful response
    jest.spyOn(component.authService, 'signup').mockReturnValue(of({}))
    jest.spyOn(component.router, 'navigate')

    component.saveRegisterForm()

    expect(component.router.navigate).toHaveBeenCalledWith(['/login'])
  })

  afterEach(() => {
    // Clear the timeout created in the component
    window.clearTimeout(component.timer)
  })
})

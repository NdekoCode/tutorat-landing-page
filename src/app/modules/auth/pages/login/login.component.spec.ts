import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, HttpClientModule] //Pour tester le module HTTP
    }).compileComponents()

    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  //login.component.spec.ts
  it('should render form with email and password inputs', () => {
    const element = fixture.nativeElement

    expect(element.querySelector('form')).toBeTruthy()
    expect(element.querySelector('#email')).toBeTruthy()
    expect(element.querySelector('#password')).toBeTruthy()
    expect(element.querySelector('#button-login')).toBeTruthy()
  })

  it('should return model invalid when form is empty', () => {
    expect(component.loginForm.valid).toBeFalsy()
  })
  it('should validate email input as required', () => {
    const email = component.loginForm?.get('email')

    expect(email?.valid).toBeFalsy()
    expect(email?.errors?.['required']).toBeTruthy()
  })
  it('should validate password input as required', () => {
    const password = component.loginForm?.get('password')

    expect(password?.valid).toBeFalsy()
    expect(password?.errors?.['required']).toBeTruthy()
  })
  it('should validate email format', () => {
    const email = component.loginForm?.get('email')
    email?.setValue('test')
    const errors = email?.errors

    expect(errors?.['required']).toBeFalsy()
    expect(errors?.['pattern']).toBeTruthy()
    expect(email?.valid).toBeFalsy()
  })
  it('should validate email format correctly', () => {
    const email = component.loginForm?.get('email')
    email?.setValue('test@test.com')
    const errors = email?.errors || {}

    expect(email?.valid).toBeTruthy()
    expect(errors?.['required']).toBeFalsy()
    expect(errors?.['pattern']).toBeFalsy()
  })
})

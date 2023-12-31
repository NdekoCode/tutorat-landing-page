import {
  GoogleLoginProvider,
  SocialAuthServiceConfig
} from '@abacritt/angularx-social-login'
import { HttpClientModule } from '@angular/common/http'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { of, throwError } from 'rxjs'
import { AuthService } from 'src/app/shared/services/auth/auth.service'
import { environment } from 'src/environments/environment'
import { SignupComponent } from './signup.component'
/**
 *
 * Ces tests vérifient les scénarios suivants :
 *
- Initialisation du formulaire d'inscription et de ses contrôles
- Validation du formulaire avec des champs vides
- Validation du formulaire avec des champs remplis correctement
- Affichage du message d'alerte après une inscription réussie
- Affichage du message d'alerte en cas d'erreur lors de l'inscription
- Navigation vers la page de connexion après une inscription réussie
- Nettoyage du timeout lors de la destruction du composant (dans la fonction afterEach)

 */
describe('SignupComponent', () => {
  let component: SignupComponent
  let fixture: ComponentFixture<SignupComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ],

      providers: [
        AuthService,
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider('')
              }
            ]
          } as SocialAuthServiceConfig
        }
      ]
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
    component.registerForm.get('email')?.setValue('arick@gmail.com')
    component.registerForm.get('phoneNumber')?.setValue('0991487950')
    component.registerForm.get('password')?.setValue('7288Ndeko*')
    component.registerForm.get('confirmPassword')?.setValue('7288Ndeko*')
    // Set other form controls to valid values

    expect(component.registerForm.valid).toBeTruthy()
  })
  xit('should show the alert message after successful signup', () => {
    // Mock the signup method of AuthService to return a successful response
    jest.spyOn(component.authService, 'signup').mockReturnValue(of({}))

    component.saveRegisterForm()

    expect(component.submitForm).toBeTruthy()
    expect(component.alert.isShown).toBeTruthy()
    expect(component.alert.alertType).toEqual('success')
    // Add assertions for other properties of the alert object
  })

  xit('should show the alert message if there is an error during signup', () => {
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
  xit('should navigate to login page after successful signup', () => {
    // Mock the signup method of AuthService to return a successful response
    jest.spyOn(component.authService, 'signup').mockReturnValue(of({}))
    jest.spyOn(component.router, 'navigate')

    component.saveRegisterForm()

    expect(component.router.navigate).toHaveBeenCalledWith(['/auth/login'])
  })

  afterEach(() => {
    // Clear the timeout created in the component
    window.clearTimeout(component.timer)
  })
})

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AUTH_ROUTES } from 'src/app/core/routes/routes'
import { formatURL } from 'src/app/core/utilities/helpers'
import { ConfirmationComponent } from './pages/confirmation/confirmation.component'
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component'
import { LoginComponent } from './pages/login/login.component'
import { LogoutComponent } from './pages/logout/logout.component'
import { OTPVerificationComponent } from './pages/otp-verification/otp-verification.component'
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component'
import { SignupComponent } from './pages/signup/signup.component'
import { TutorsSupplementFormComponent } from './pages/tutors-supplement-form/tutors-supplement-form.component'
import { UserChoiceComponent } from './pages/user-choice/user-choice.component'
import { VerifyUserComponent } from './pages/verify-user/verify-user.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: formatURL(AUTH_ROUTES.LOGIN),
    pathMatch: 'full'
  },
  {
    path: formatURL(AUTH_ROUTES.LOGIN),
    component: LoginComponent
  },
  {
    path: formatURL(AUTH_ROUTES.SIGNUP),
    component: SignupComponent
  },
  {
    path: formatURL(AUTH_ROUTES.USER_CHOICE),
    component: UserChoiceComponent
  },
  {
    path: formatURL(AUTH_ROUTES.FORGET_PASSWORD),
    component: ForgetPasswordComponent
  },
  {
    path: formatURL(AUTH_ROUTES.VERIFY_USER),
    component: VerifyUserComponent
  },
  {
    path: formatURL(AUTH_ROUTES.RESET_PASSWORD),
    component: ResetPasswordComponent
  },
  {
    path: formatURL(AUTH_ROUTES.VERIFY_PASSWORD),
    component: OTPVerificationComponent
  },
  {
    path: formatURL(AUTH_ROUTES.TUTOR_FORM),
    component: TutorsSupplementFormComponent
  },

  {
    path: formatURL(AUTH_ROUTES.CONFIRMATION),
    component: ConfirmationComponent
  },
  {
    path: formatURL(AUTH_ROUTES.LOGOUT),
    component: LogoutComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

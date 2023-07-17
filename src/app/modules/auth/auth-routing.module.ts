import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
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
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'user-choice',
    component: UserChoiceComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'verify-user',
    component: VerifyUserComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'verify-password',
    component: OTPVerificationComponent
  },
  {
    path: 'tutor-form',
    component: TutorsSupplementFormComponent
  },

  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

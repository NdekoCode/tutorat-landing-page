import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ConfirmationComponent } from './pages/confirmation/confirmation.component'
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component'
import { LoginComponent } from './pages/login/login.component'
import { LogoutComponent } from './pages/logout/logout.component'
import { NewPasswordComponent } from './pages/new-password/new-password.component'
import { SignupComponent } from './pages/signup/signup.component'
import { VerifyPasswordComponent } from './pages/verify-password/verify-password.component'
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
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'verify-user',
    component: VerifyUserComponent
  },
  {
    path: 'new-password',
    component: NewPasswordComponent
  },
  {
    path: 'verify-password',
    component: VerifyPasswordComponent
  },

  {
    path: 'verify-user',
    component: ConfirmationComponent
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

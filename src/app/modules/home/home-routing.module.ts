import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ConfirmationComponent } from './pages/confirmation/confirmation.component'
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component'
import { LoginComponent } from './pages/login/login.component'
import { NewPasswordComponent } from './pages/new-password/new-password.component'
import { SignupComponent } from './pages/signup/signup.component'
import { VerifyPasswordComponent } from './pages/verify-password/verify-password.component'

const routes: Routes = [
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
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

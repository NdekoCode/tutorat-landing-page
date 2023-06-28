import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { AlertComponent } from 'src/app/shared/components/alert/alert.component'
import { AuthRoutingModule } from './auth-routing.module'
import { ConfirmationComponent } from './pages/confirmation/confirmation.component'
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component'
import { LoginComponent } from './pages/login/login.component'
import { LogoutComponent } from './pages/logout/logout.component'
import { NewPasswordComponent } from './pages/new-password/new-password.component'
import { SignupComponent } from './pages/signup/signup.component'
import { VerifyPasswordComponent } from './pages/verify-password/verify-password.component'
import { VerifyComponent } from './pages/verify/verify.component'

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ForgetPasswordComponent,
    NewPasswordComponent,
    VerifyPasswordComponent,
    ConfirmationComponent,
    AlertComponent,
    VerifyComponent,
    LogoutComponent
  ],
  exports: [AlertComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule]
})
export class AuthModule {}

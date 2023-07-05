import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module'
import { AuthRoutingModule } from './auth-routing.module'
import { ConfirmationComponent } from './pages/confirmation/confirmation.component'
import { LoginComponent } from './pages/login/login.component'
import { LogoutComponent } from './pages/logout/logout.component'
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component'
import { OTPVerificationComponent } from './pages/otp-verification/otp-verification.component'
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component'
import { SignupComponent } from './pages/signup/signup.component'
import { VerifyUserComponent } from './pages/verify-user/verify-user.component'

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    OTPVerificationComponent,
    ConfirmationComponent,
    VerifyUserComponent,
    LogoutComponent
  ],
  exports: [],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule, SharedModule]
})
export class AuthModule {}

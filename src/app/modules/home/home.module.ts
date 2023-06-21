import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { HomeRoutingModule } from './home-routing.module'
import { ConfirmationComponent } from './pages/confirmation/confirmation.component'
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component'
import { NewPasswordComponent } from './pages/new-password/new-password.component'
import { SignupComponent } from './pages/signup/signup.component'
import { VerifyPasswordComponent } from './pages/verify-password/verify-password.component'

@NgModule({
  declarations: [
    SignupComponent,
    ForgetPasswordComponent,
    NewPasswordComponent,
    VerifyPasswordComponent,
    ConfirmationComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, HomeRoutingModule]
})
export class HomeModule {}

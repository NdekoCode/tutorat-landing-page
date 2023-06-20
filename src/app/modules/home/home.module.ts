import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeRoutingModule } from './home-routing.module'
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component'
import { NewPasswordComponent } from './pages/new-password/new-password.component'
import { SignupComponent } from './pages/signup/signup.component'
import { VerifyPasswordComponent } from './pages/verify-password/verify-password.component'

@NgModule({
  declarations: [
    SignupComponent,
    ForgetPasswordComponent,
    NewPasswordComponent,
    VerifyPasswordComponent
  ],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}

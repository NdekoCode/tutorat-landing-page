import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeRoutingModule } from './home-routing.module'
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component'
import { SignupComponent } from './pages/signup/signup.component'

@NgModule({
  declarations: [SignupComponent, ForgetPasswordComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}

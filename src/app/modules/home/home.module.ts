import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HomeRoutingModule } from './home-routing.module'
import { SignupComponent } from './pages/signup/signup.component'

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}

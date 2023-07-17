import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { UOverviewComponent } from './pages/u-overview/u-overview.component'
import { UserRoutingModule } from './user-routing.module'

@NgModule({
  declarations: [UOverviewComponent],
  imports: [CommonModule, UserRoutingModule]
})
export class UserModule {}

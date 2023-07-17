import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MYSPACE_USER_ROUTES } from 'src/app/core/routes/routes'
import { formatURL } from 'src/app/core/utilities/helpers'
import { UOverviewComponent } from './pages/u-overview/u-overview.component'

const routes: Routes = [
  {
    path: formatURL(MYSPACE_USER_ROUTES.GET_USER, {
      'myspace/': '',
      'user/': ''
    }),
    component: UOverviewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}

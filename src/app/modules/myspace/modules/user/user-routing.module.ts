import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { UOverviewComponent } from './pages/u-overview/u-overview.component'

const routes: Routes = [
  {
    path: '/:id',
    component: UOverviewComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}

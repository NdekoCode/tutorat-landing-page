import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CalendarsComponent } from './pages/calendars/calendars.component'
import { CreateSessionComponent } from './pages/create-session/create-session.component'
import { OverviewComponent } from './pages/overview/overview.component'

const routes: Routes = [
  {
    path: ':id',
    component: OverviewComponent
  },
  {
    path: 'create-session',
    component: CreateSessionComponent
  },
  {
    path: 'calendar',
    component: CalendarsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule {}

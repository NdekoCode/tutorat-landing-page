import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MYSPACE_TUTOR_ROUTES } from 'src/app/core/routes/routes'
import { formatURL } from 'src/app/core/utilities/helpers'
import { CalendarsComponent } from './pages/calendars/calendars.component'
import { CreateSessionComponent } from './pages/create-session/create-session.component'
import { OverviewComponent } from './pages/overview/overview.component'

const routes: Routes = [
  {
    path: formatURL(MYSPACE_TUTOR_ROUTES.GET_TOTOR, {
      'myspace/': '',
      'tutor/': ''
    }),
    component: OverviewComponent
  },
  {
    path: formatURL(MYSPACE_TUTOR_ROUTES.CREATE_SESSION, {
      'myspace/': '',
      'tutor/': ''
    }),
    component: CreateSessionComponent
  },
  {
    path: formatURL(MYSPACE_TUTOR_ROUTES.CALENDAR, {
      'myspace/': '',
      'tutor/': ''
    }),
    component: CalendarsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule {}

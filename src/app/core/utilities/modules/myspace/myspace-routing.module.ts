import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MYSPACE_ROUTES } from 'src/app/core/routes/routes'
import { formatURL } from 'src/app/core/utilities/helpers'
import { MyspaceLayoutComponent } from './myspace-layout.component'
import { CalendarComponent } from './pages/calendar/calendar.component'
import { CreateSessionComponent } from './pages/create-session/create-session.component'
import { MessagesComponent } from './pages/messages/messages.component'
import { OverviewComponent } from './pages/overview/overview.component'
import { SettingsComponent } from './pages/settings/settings.component'
import { TutorsComponent } from './pages/tutors/tutors.component'
const routes: Routes = [
  {
    path: formatURL(MYSPACE_ROUTES.HOME, { 'myspace/': '', myspace: '' }),
    component: MyspaceLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: formatURL(MYSPACE_ROUTES.OVERVIEW, { 'myspace/': '' })
      },
      {
        path: formatURL(MYSPACE_ROUTES.OVERVIEW, { 'myspace/': '' }),
        component: OverviewComponent
      },
      {
        path: formatURL(MYSPACE_ROUTES.TUTORS, { 'myspace/': '' }),
        component: TutorsComponent
      },
      {
        path: formatURL(MYSPACE_ROUTES.MESSAGES, { 'myspace/': '' }),
        component: MessagesComponent
      },
      {
        path: formatURL(MYSPACE_ROUTES.SETTINGS, { 'myspace/': '' }),
        component: SettingsComponent
      },
      {
        path: formatURL(MYSPACE_ROUTES.GET_TOTOR, {
          'myspace/': '',
          'tutor/': ''
        }),
        component: OverviewComponent
      },
      {
        path: formatURL(MYSPACE_ROUTES.CREATE_SESSION, {
          'myspace/': '',
          'tutor/': ''
        }),
        component: CreateSessionComponent
      },
      {
        path: formatURL(MYSPACE_ROUTES.CALENDAR, {
          'myspace/': '',
          'tutor/': ''
        }),
        component: CalendarComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySpaceRoutingModule {}

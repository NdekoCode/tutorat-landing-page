import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MyspaceLayoutComponent } from './myspace-layout.component'
import { CalendarsComponent } from './pages/calendars/calendars.component'
import { MessagesComponent } from './pages/messages/messages.component'
import { OverviewComponent } from './pages/overview/overview.component'
import { SettingsComponent } from './pages/settings/settings.component'
import { TutorsComponent } from './pages/tutors/tutors.component'

const routes: Routes = [
  {
    path: '',
    component: MyspaceLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'tutors',
        component: TutorsComponent
      },
      {
        path: 'calendars',
        component: CalendarsComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySpaceRoutingModule {}

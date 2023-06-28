import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MyspaceLayoutComponent } from './myspace-layout.component'
import { MySpaceRoutingModule } from './myspace-routing.module'
import { CalendarsComponent } from './pages/calendars/calendars.component'
import { MessagesComponent } from './pages/messages/messages.component'
import { OverviewComponent } from './pages/overview/overview.component'
import { SettingsComponent } from './pages/settings/settings.component'
import { TutorsComponent } from './pages/tutors/tutors.component'

@NgModule({
  declarations: [
    OverviewComponent,
    TutorsComponent,
    CalendarsComponent,
    MessagesComponent,
    SettingsComponent,
    MyspaceLayoutComponent
  ],
  imports: [CommonModule, MySpaceRoutingModule]
})
export class MySpaceModule {}

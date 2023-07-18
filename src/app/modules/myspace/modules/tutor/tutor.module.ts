import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { MyspaceShareModule } from '../myspace-share/myspace-share.module'
import { CalendarsComponent } from './pages/calendars/calendars.component'
import { CreateSessionComponent } from './pages/create-session/create-session.component'
import { OverviewComponent } from './pages/overview/overview.component'
import { TutorRoutingModule } from './tutor-routing.module'

@NgModule({
  declarations: [CalendarsComponent, OverviewComponent, CreateSessionComponent],
  imports: [CommonModule, TutorRoutingModule, MyspaceShareModule]
})
export class TutorModule {}

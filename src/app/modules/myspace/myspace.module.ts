import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { FooterComponent } from './components/footer/footer.component'
import { HeadermenuComponent } from './components/headermenu/headermenu.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { SidemenuComponent } from './components/sidemenu/sidemenu.component'
import { SpaceContentComponent } from './components/space-content/space-content.component'
import { MyspaceLayoutComponent } from './myspace-layout.component'
import { MySpaceRoutingModule } from './myspace-routing.module'
import { CalendarComponent } from './pages/calendar/calendar.component'
import { CreateSessionComponent } from './pages/create-session/create-session.component'
import { MessagesComponent } from './pages/messages/messages.component'
import { OverviewComponent } from './pages/overview/overview.component'
import { SettingsComponent } from './pages/settings/settings.component'
import { TutorsComponent } from './pages/tutors/tutors.component'
import { ViewTutorComponent } from './pages/view-tutor/view-tutor.component'

@NgModule({
  declarations: [
    OverviewComponent,
    TutorsComponent,
    CreateSessionComponent,
    CalendarComponent,
    MessagesComponent,
    SettingsComponent,
    MyspaceLayoutComponent,
    SidemenuComponent,
    HeadermenuComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ViewTutorComponent,
    SpaceContentComponent
  ],
  imports: [CommonModule, MySpaceRoutingModule, SharedModule]
})
export class MySpaceModule {}

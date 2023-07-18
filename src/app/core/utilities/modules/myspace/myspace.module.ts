import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FooterComponent } from './components/footer/footer.component'
import { HeadermenuComponent } from './components/headermenu/headermenu.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { SidemenuComponent } from './components/sidemenu/sidemenu.component'
import { MyspaceLayoutComponent } from './myspace-layout.component'
import { MySpaceRoutingModule } from './myspace-routing.module'
import { MessagesComponent } from './pages/messages/messages.component'
import { SettingsComponent } from './pages/settings/settings.component'
import { TutorsComponent } from './pages/tutors/tutors.component'

@NgModule({
  declarations: [
    TutorsComponent,
    MessagesComponent,
    SettingsComponent,
    MyspaceLayoutComponent,
    SidemenuComponent,
    HeadermenuComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [CommonModule, MySpaceRoutingModule]
})
export class MySpaceModule {}

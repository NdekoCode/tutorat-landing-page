import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HeadermenuComponent } from './components/headermenu/headermenu.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SidemenuComponent } from './components/sidemenu/sidemenu.component'
import { MyspaceShareModule } from './modules/myspace-share/myspace-share.module'
import { TutorModule } from './modules/tutor/tutor.module'
import { UserModule } from './modules/user/user.module'
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
    HeadermenuComponent
  ],
  imports: [
    CommonModule,
    MySpaceRoutingModule,
    MyspaceShareModule,
    UserModule,
    TutorModule
  ],
  exports: [NavbarComponent]
})
export class MySpaceModule {}

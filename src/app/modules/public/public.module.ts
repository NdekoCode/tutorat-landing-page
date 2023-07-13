import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { MenuItemComponent } from './components/menu-item/menu-item.component'
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component'
import { AboutComponent } from './pages/about/about.component'
import { BlogComponent } from './pages/blog/blog.component'
import { ContactComponent } from './pages/contact/contact.component'
import { HomeComponent } from './pages/home/home.component'
import { TutorsPageComponent } from './pages/tutors-page/tutors-page.component'
import { PublicLayoutComponent } from './public-layout.component'
import { PublicRoutingModule } from './public-routing.module'
import { ServicesComponent } from './pages/services/services.component'

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TutorsPageComponent,
    PublicLayoutComponent,
    BlogComponent,
    MenuItemComponent,
    FooterComponent,
    HeaderComponent,
    NotificationBarComponent,
    ServicesComponent
  ],
  imports: [CommonModule, PublicRoutingModule]
})
export class PublicModule {}

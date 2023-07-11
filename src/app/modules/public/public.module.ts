import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AboutComponent } from './pages/about/about.component'
import { ContactComponent } from './pages/contact/contact.component'
import { HomeComponent } from './pages/home/home.component'
import { TutorsPageComponent } from './pages/tutors-page/tutors-page.component'
import { PublicLayoutComponent } from './public-layout/public-layout.component'
import { PublicRoutingModule } from './public-routing.module'
import { BlogComponent } from './pages/blog/blog.component'

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TutorsPageComponent,
    PublicLayoutComponent,
    BlogComponent
  ],
  imports: [CommonModule, PublicRoutingModule]
})
export class PublicModule {}

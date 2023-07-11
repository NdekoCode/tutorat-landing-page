import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './pages/about/about.component'
import { BlogComponent } from './pages/blog/blog.component'
import { ContactComponent } from './pages/contact/contact.component'
import { HomeComponent } from './pages/home/home.component'
import { TutorsPageComponent } from './pages/tutors-page/tutors-page.component'
import { PublicLayoutComponent } from './public-layout.component'

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'tutors',
        component: TutorsPageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}

import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PUBLIC_ROUTES } from 'src/app/core/routes/routes'
import { formatURL } from 'src/app/core/utilities/helpers'
import { AboutComponent } from './pages/about/about.component'
import { BlogComponent } from './pages/blog/blog.component'
import { ContactComponent } from './pages/contact/contact.component'
import { HomeComponent } from './pages/home/home.component'
import { ServicesComponent } from './pages/services/services.component'
import { TutorsPageComponent } from './pages/tutors-page/tutors-page.component'
import { PublicLayoutComponent } from './public-layout.component'

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: formatURL(PUBLIC_ROUTES.HOME),
        component: HomeComponent
      },
      {
        path: formatURL(PUBLIC_ROUTES.SERVICES),
        component: ServicesComponent
      },
      {
        path: formatURL(PUBLIC_ROUTES.CONTACT),
        component: ContactComponent
      },
      {
        path: formatURL(PUBLIC_ROUTES.TUTORS),
        component: TutorsPageComponent
      },
      {
        path: formatURL(PUBLIC_ROUTES.ABOUT),
        component: AboutComponent
      },
      {
        path: formatURL(PUBLIC_ROUTES.BLOG),
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

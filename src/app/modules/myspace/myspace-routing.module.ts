import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MYSPACE_ROUTES } from 'src/app/core/routes/routes'
import { formatURL } from 'src/app/core/utilities/helpers'
import { OverviewComponent } from './modules/tutor/pages/overview/overview.component'
import { MyspaceLayoutComponent } from './myspace-layout.component'
import { MessagesComponent } from './pages/messages/messages.component'
import { SettingsComponent } from './pages/settings/settings.component'
import { TutorsComponent } from './pages/tutors/tutors.component'
const routes: Routes = [
  {
    path: formatURL(MYSPACE_ROUTES.HOME, { 'myspace/': '', myspace: '' }),
    component: MyspaceLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: formatURL(MYSPACE_ROUTES.OVERVIEW, { 'myspace/': '' })
      },
      {
        path: formatURL(MYSPACE_ROUTES.OVERVIEW, { 'myspace/': '' }),
        component: OverviewComponent
      },
      {
        path: formatURL(MYSPACE_ROUTES.TUTORS, { 'myspace/': '' }),
        component: TutorsComponent
      },
      {
        path: formatURL(MYSPACE_ROUTES.MESSAGES, { 'myspace/': '' }),
        component: MessagesComponent
      },
      {
        path: formatURL(MYSPACE_ROUTES.SETTINGS, { 'myspace/': '' }),
        component: SettingsComponent
      },
      {
        path: 'tutor',
        loadChildren: () =>
          import('./modules/tutor/tutor.module').then((m) => m.TutorModule)
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/user/user.module').then((m) => m.UserModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySpaceRoutingModule {}

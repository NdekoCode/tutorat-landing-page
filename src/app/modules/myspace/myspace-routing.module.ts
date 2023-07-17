import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { OverviewComponent } from './modules/tutor/pages/overview/overview.component'
import { MyspaceLayoutComponent } from './myspace-layout.component'
import { MessagesComponent } from './pages/messages/messages.component'
import { SettingsComponent } from './pages/settings/settings.component'
import { TutorsComponent } from './pages/tutors/tutors.component'

const routes: Routes = [
  {
    path: '',
    component: MyspaceLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'tutors',
        component: TutorsComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'settings',
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

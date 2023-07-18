import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ErrorComponent } from './components/error/error.component'
import { AuthGuard } from './core/guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    // Dans la memoire ce module sera charger lorsqu'il est demander et uniquement lorsqu'il est demander, alors une fois que l'on va demander cette module il va se charger et seulement quand il sera charger que son routing va se mettre en place
    loadChildren: () =>
      import('./core/utilities/modules/public/public.module').then(
        (m) => m.PublicModule
      ),
    data: { preload: true }
  },
  {
    path: 'auth',
    // Dans la memoire ce module sera charger lorsqu'il est demander et uniquement lorsqu'il est demander, alors une fois que l'on va demander cette module il va se charger et seulement quand il sera charger que son routing va se mettre en place
    loadChildren: () =>
      import('./core/utilities/modules/auth/auth.module').then(
        (m) => m.AuthModule
      )
  },
  {
    path: 'myspace',
    loadChildren: () =>
      import('./core/utilities/modules/myspace/myspace.module').then(
        (m) => m.MySpaceModule
      ),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ErrorComponent
    // redirectTo: '',
    // pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

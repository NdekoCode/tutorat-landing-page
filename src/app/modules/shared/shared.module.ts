import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { AlertScreenComponent } from 'src/app/shared/components/alert-screen/alert-screen.component'
import { AlertComponent } from 'src/app/shared/components/alert/alert.component'
import { CenteredSkeletonComponent } from 'src/app/shared/components/centered-skeleton/centered-skeleton.component'
@NgModule({
  declarations: [
    AlertComponent,
    AlertScreenComponent,
    CenteredSkeletonComponent
  ],
  imports: [CommonModule],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    AlertComponent,
    AlertScreenComponent,
    CenteredSkeletonComponent
  ]
})
export class SharedModule {}

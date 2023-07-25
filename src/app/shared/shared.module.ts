import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AlertScreenComponent } from 'src/app/shared/components/alert-screen/alert-screen.component'
import { AlertComponent } from 'src/app/shared/components/alert/alert.component'
import { CenteredSkeletonComponent } from 'src/app/shared/components/centered-skeleton/centered-skeleton.component'
import { ModalVideoComponent } from 'src/app/shared/components/modal-video/modal-video.component'
import { ScrollDirective } from 'src/app/shared/directives/scroll.directive'
import { InputGroupComponent } from './components/input-group/input-group.component'
import { InputIconComponent } from './components/input-icon/input-icon.component'
import { InputComponent } from './components/input/input.component'
import { TextareaComponent } from './components/textarea/textarea.component'
@NgModule({
  declarations: [
    AlertComponent,
    AlertScreenComponent,
    CenteredSkeletonComponent,
    ModalVideoComponent,
    ScrollDirective,
    InputComponent,
    InputGroupComponent,
    InputIconComponent,
    TextareaComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    AlertComponent,
    AlertScreenComponent,
    CenteredSkeletonComponent,
    ModalVideoComponent,
    ScrollDirective,
    InputComponent,
    InputGroupComponent,
    InputIconComponent,
    TextareaComponent,
    FormsModule
  ]
})
export class SharedModule {}

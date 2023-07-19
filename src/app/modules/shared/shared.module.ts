import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AlertScreenComponent } from 'src/app/shared/components/alert-screen/alert-screen.component'
import { AlertComponent } from 'src/app/shared/components/alert/alert.component'
import { CenteredSkeletonComponent } from 'src/app/shared/components/centered-skeleton/centered-skeleton.component'
import { ModalVideoComponent } from 'src/app/shared/components/modal-video/modal-video.component'
import { SocialCardComponent } from 'src/app/shared/components/social-card/social-card.component'
import { TutorCarouselComponent } from 'src/app/shared/components/tutor-carousel/tutor-carousel.component'
import { TutorShortCardComponent } from 'src/app/shared/components/tutor-short-card/tutor-short-card.component'
import { TutorSuggestionCardComponent } from 'src/app/shared/components/tutor-suggestion-card/tutor-suggestion-card.component'
import { DataTipDirective } from 'src/app/shared/directives/data-tip.directive'
import { ScrollDirective } from 'src/app/shared/directives/scroll.directive'
import { TutorCardComponent } from '../myspace/components/tutor-card/tutor-card.component'
@NgModule({
  declarations: [
    AlertComponent,
    AlertScreenComponent,
    CenteredSkeletonComponent,
    ModalVideoComponent,
    ScrollDirective,
    TutorCardComponent,
    TutorCarouselComponent,
    TutorShortCardComponent,
    TutorSuggestionCardComponent,
    SocialCardComponent,
    DataTipDirective
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    AlertComponent,
    AlertScreenComponent,
    CenteredSkeletonComponent,
    ModalVideoComponent,
    ScrollDirective,
    TutorCardComponent,
    TutorCarouselComponent,
    TutorShortCardComponent,
    TutorSuggestionCardComponent,
    SocialCardComponent,
    DataTipDirective
  ]
})
export class SharedModule {}

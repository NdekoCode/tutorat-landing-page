import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AlertScreenComponent } from 'src/app/shared/components/alert-screen/alert-screen.component'
import { AlertComponent } from 'src/app/shared/components/alert/alert.component'
import { CardTutorSuggestionComponent } from 'src/app/shared/components/card-tutor-suggestion/card-tutor-suggestion.component'
import { CenteredSkeletonComponent } from 'src/app/shared/components/centered-skeleton/centered-skeleton.component'
import { ModalVideoComponent } from 'src/app/shared/components/modal-video/modal-video.component'
import { RatingComponent } from 'src/app/shared/components/rating/rating.component'
import { SocialCardComponent } from 'src/app/shared/components/social-card/social-card.component'
import { TutorCarouselComponent } from 'src/app/shared/components/tutor-carousel/tutor-carousel.component'
import { TutorShortCardComponent } from 'src/app/shared/components/tutor-short-card/tutor-short-card.component'
import { TutorSuggestionCardComponent } from 'src/app/shared/components/tutor-suggestion-card/tutor-suggestion-card.component'
import { DataTipDirective } from 'src/app/shared/directives/data-tip.directive'
import { ScrollDirective } from 'src/app/shared/directives/scroll.directive'
import { TutorCardComponent } from '../modules/myspace/components/tutor-card/tutor-card.component'
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
    TextareaComponent,
    TutorCardComponent,
    TutorCarouselComponent,
    TutorShortCardComponent,
    TutorSuggestionCardComponent,
    SocialCardComponent,
    DataTipDirective,
    RatingComponent,
    CardTutorSuggestionComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
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
    FormsModule,
    TutorCardComponent,
    TutorCarouselComponent,
    TutorShortCardComponent,
    TutorSuggestionCardComponent,
    SocialCardComponent,
    DataTipDirective,
    FormsModule,
    RatingComponent,
    CardTutorSuggestionComponent
  ]
})
export class SharedModule {}

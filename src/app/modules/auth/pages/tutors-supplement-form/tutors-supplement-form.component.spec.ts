import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { CoursesService } from 'src/app/shared/services/courses/courses.service'
import { VideoProcessingService } from 'src/app/shared/services/video-processing.service'
import { environment } from 'src/environments/environment'
import { TutorsSupplementFormComponent } from './tutors-supplement-form.component'

describe('TutorsSupplementFormComponent', () => {
  let component: TutorsSupplementFormComponent
  let fixture: ComponentFixture<TutorsSupplementFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorsSupplementFormComponent],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ],
      providers: [
        HttpClient,
        FormBuilder,
        CoursesService,
        VideoProcessingService
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(TutorsSupplementFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

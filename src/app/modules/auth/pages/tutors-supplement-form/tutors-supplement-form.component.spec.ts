import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { CoursesService } from 'src/app/shared/services/courses/courses.service'
import { VideoProcessingService } from 'src/app/shared/services/video-processing.service'
import { TutorsSupplementFormComponent } from './tutors-supplement-form.component'

describe('TutorsSupplementFormComponent', () => {
  let component: TutorsSupplementFormComponent
  let fixture: ComponentFixture<TutorsSupplementFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorsSupplementFormComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
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

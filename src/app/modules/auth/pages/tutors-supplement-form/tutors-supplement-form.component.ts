/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { hourlyRateErrorsInput } from 'src/app/core/utilities/forms'
import { Alert, Course, Timer } from 'src/app/core/utilities/types'
import { CoursesService } from 'src/app/shared/services/courses/courses.service'
import { VideoProcessingService } from 'src/app/shared/services/video-processing.service'

@Component({
  selector: 'app-tutors-supplement-form',
  templateUrl: './tutors-supplement-form.component.html',
  styleUrls: ['./tutors-supplement-form.component.scss']
})
export class TutorsSupplementFormComponent implements OnInit {
  tutorSupplementForm!: FormGroup
  imagePath: string | undefined = '/assets/images/avatar.png'
  currentStep: number = 1
  stepClass: string = 'fade-step-next'
  alert: Alert = {
    isShown: false,
    alertType: 'error',
    alertTitle: '',
    alertMessage: ''
  }
  hourlyRateErrors = hourlyRateErrorsInput
  timer: Timer
  submitForm: boolean = false
  isLoading: boolean = false
  isChange: boolean = false

  thumbnailData!: string

  urlVideo: string = ''
  format: string = ''
  fb = new FormBuilder()
  tutorForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CoursesService,
    private videoService: VideoProcessingService
  ) {}
  specializations: Observable<Course[]> = this.courseService.getAllCourses()
  specializationFocus: boolean = false
  specializationValue: (string | number)[] = []
  selectedSpecializationValue: Course[] = []
  focusField() {
    this.specializationFocus = true
  }
  unFocusField() {
    this.specializationFocus = false
  }
  addSpecialisation(item: string | number) {
    this.specializationValue.push(item)
    this.specializationValue = [...new Set(this.specializationValue)]
    this.tutorForm.get('specialization')?.patchValue(this.specializationValue)
  }
  ngOnInit() {
    this.tutorForm = this.formBuilder.group({
      photo: ['', Validators.required],
      bio: ['', Validators.required],
      hourlyRate: ['', Validators.required],
      transport: ['', Validators.required],
      specialization: this.formBuilder.array([]),
      experience: this.formBuilder.array([
        this.formBuilder.group({
          enterprise: ['', Validators.required],
          poste: ['', Validators.required],
          startTime: ['', Validators.required],
          endTime: ['', Validators.required]
        })
      ]),
      video: this.formBuilder.group({
        url: ['', Validators.required],
        thumbnail: ['', Validators.required],
        description: ['', Validators.required]
      }),
      document: this.formBuilder.array([
        this.formBuilder.group({
          documentUrl: ['', Validators.required],
          description: ['', Validators.required],
          documentType: ['', Validators.required]
        })
      ])
    })
    this.courseService.getAllCourses().subscribe(
      (response) => {
        console.log(response)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  patchVideoThumbnail(newThumbnail: string) {
    const video = {
      thumbnail: newThumbnail
    }
    this.tutorForm.get('video')?.patchValue(video)
  }
  // eslint-disable-next-line class-methods-use-this
  addToParentChoice(): void {
    // Fais quelque chose avec les options sélectionnées dans le composant parent
  }
  nextStep() {
    console.log(this.tutorForm.value)
    this.stepClass = 'fade-step-next'
    this.currentStep++
  }

  previousStep() {
    this.stepClass = 'fade-step-prev'
    this.currentStep--
  }
  get specializationFormArray() {
    return this.tutorForm.get('specialization') as FormArray
  }

  onSelectFile(event: Event) {
    const target = event.target as HTMLInputElement
    const file = target.files && target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      if (file.type.indexOf('image') > -1) {
        this.format = 'image'
      } else if (file.type.indexOf('video') > -1) {
        this.videoService.generateThumbnail(file)
        this.format = 'video'
      }
      reader.onload = (event) => {
        this.urlVideo = (<FileReader>event.target).result as string
      }
    }
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
      const file = target.files[0]
      const reader = new FileReader()

      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.imagePath = e.target?.result as string // Stockez l'URL de l'image prévisualisée dans une variable
      }

      reader.readAsDataURL(file) // Convertissez le fichier en URL base64 pour l'afficher
    }
  }
  addSpecialization() {
    this.specializationFormArray.push(this.formBuilder.control(''))
  }

  deleteSpecialization(index: number) {
    this.specializationFormArray.removeAt(index)
  }

  get experienceFormArray() {
    return this.tutorForm.get('experience') as FormArray
  }

  addExperience() {
    this.experienceFormArray.push(
      this.formBuilder.group({
        enterprise: ['', Validators.required],
        poste: ['', Validators.required],
        startTime: ['', Validators.required],
        endTime: ['', Validators.required]
      })
    )
  }

  deleteExperience(index: number) {
    this.experienceFormArray.removeAt(index)
  }

  get documentFormArray() {
    return this.tutorForm.get('document') as FormArray
  }

  addDocument() {
    this.documentFormArray.push(
      this.formBuilder.group({
        documentUrl: ['', Validators.required],
        description: ['', Validators.required],
        documentType: ['', Validators.required]
      })
    )
  }

  deleteDocument(index: number) {
    this.documentFormArray.removeAt(index)
  }
  saveTutorForm() {
    // Soumettre le formulaire et effectuer les actions nécessaires
    // eslint-disable-next-line no-console
    if (this.tutorSupplementForm.valid) {
      // Envoyez les données du formulaire au serveur
    }
    if (this.tutorForm.valid) {
      // Envoyer les données au serveur ici
      console.log(this.tutorForm.value)
    } else {
      // Afficher des erreurs ou messages de validation ici
      console.log('Formulaire invalide')
    }
  }
  public add(): void {
    this.videoService
      .promptForVideo()
      .then((videoFile) => {
        //console.dir(videoFile);
        return this.videoService.generateThumbnail(videoFile)
      })
      .then((thumbnailData) => {
        //console.dir(thumbnailData);
        this.thumbnailData = thumbnailData
      })
  }
}

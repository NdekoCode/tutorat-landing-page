/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { hourlyRateErrorsInput } from 'src/app/core/utilities/forms'
import {
  Alert,
  Course,
  DocumentType,
  Timer
} from 'src/app/core/utilities/types'
import { CoursesService } from 'src/app/shared/services/courses/courses.service'
import { DocumentService } from 'src/app/shared/services/document/document.service'
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

  specializations: Observable<Course[]> = this.courseService.getAllCourses()

  specializationFocus: boolean = false
  specializationsData!: Course[]
  specializationControls!: FormArray
  specializationValue: (string | number)[] = []

  // Document
  documentTypes!: DocumentType[]
  documentItem!: { [key: string | number]: string }
  selectedSpecializations: number[] = []

  // eslint-disable-next-line max-params
  constructor(
    private formBuilder: FormBuilder,
    private courseService: CoursesService,
    private videoService: VideoProcessingService,
    private documentService: DocumentService
  ) {}
  ngOnInit() {
    this.tutorForm = this.formBuilder.group({
      photo: ['', Validators.required],
      bio: ['', [Validators.required, Validators.minLength(10)]],
      hourlyRate: [
        '',
        [Validators.min(5), Validators.max(1000), Validators.required]
      ],
      transport: [
        '',
        [Validators.min(1), Validators.max(100), Validators.required]
      ],
      specialization: this.formBuilder.array([], [Validators.required]),
      experience: this.formBuilder.array([], [Validators.required]),
      video: this.formBuilder.group({
        url: ['', Validators.required],
        thumbnail: ['', Validators.required],
        description: ['', [Validators.required, Validators.minLength(5)]]
      }),
      document: this.formBuilder.array([], [Validators.required])
    })
    // Récupérer les spécialisations depuis l'AP
    this.courseService.getAllCourses().subscribe((response) => {
      this.specializationsData = response
      this.addCheckboxes()
    })
    // Récupérer les type de document depuis l'AP
    this.documentService.getDocumentTypes().subscribe((response) => {
      this.documentTypes = response
    })

    this.specializationControls = this.tutorForm.get(
      'specialization'
    ) as FormArray
  }
  private addCheckboxes() {
    this.specializationsData.forEach((spec) => {
      const isSelected = this.selectedSpecializations.includes(spec.id)
      this.specializationControls.push(this.formBuilder.control(isSelected))
    })
  }

  updateSpecializations(event: Event, specId: number) {
    const target = event.target as HTMLInputElement
    if (target.checked) {
      this.selectedSpecializations.push(specId)
    } else {
      const indexToRemove = this.selectedSpecializations.indexOf(specId)
      if (indexToRemove !== -1) {
        this.selectedSpecializations.splice(indexToRemove, 1)
      }
    }
  }
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

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
      const file = target.files[0]
      const reader = new FileReader()

      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.imagePath = e.target?.result as string // Stockez l'URL de l'image prévisualisée dans une variable
        this.tutorForm.get('photo')?.patchValue(this.imagePath)
      }

      reader.readAsDataURL(file) // Convertissez le fichier en URL base64 pour l'afficher
    }
  }
  onDocumentSelected(event: Event, item: string | number) {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
      const file = target.files[0]
      const reader = new FileReader()

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (!this.documentItem) {
          this.documentItem = {}
        }
        this.documentItem[item] = e.target?.result as string // Stockez l'URL de l'image prévisualisée dans une variable
        if (this.documentFormArray.at(item as number)) {
          const documentGroup = this.documentFormArray.at(+item) as FormGroup
          documentGroup.get('documentUrl')?.patchValue(e.target?.result)
        }
      }

      reader.readAsDataURL(file) // Convertissez le fichier en URL base64 pour l'afficher
    }
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
  isSelectedSpec(index: number) {
    return this.selectedSpecializations.includes(index)
  }
  saveTutorForm() {
    // Soumettre le formulaire et effectuer les actions nécessaires
    // eslint-disable-next-line no-console
    if (this.tutorForm.valid) {
      this.tutorForm
        ?.get('specialization')
        ?.patchValue([...new Set(this.selectedSpecializations)])
      // Envoyer les données au serveur ici
      console.log(this.tutorForm.value)
    } else {
      // Afficher des erreurs ou messages de validation ici
      console.log('Formulaire invalide')
    }
  }

  // eslint-disable-next-line class-methods-use-this
  promptForVideo(event: Event): Promise<File> {
    return new Promise<File>((resolve, reject) => {
      const target = event.target as HTMLInputElement
      if (target.files && target.files[0]) {
        const file = target.files[0]
        resolve(file)
      } else {
        reject(new Error('Aucun fichier sélectionné'))
      }
    })
  }
  add(event: Event): void {
    this.promptForVideo(event)
      .then((videoFile) => {
        return this.videoService.generateThumbnail(videoFile)
      })
      .then((thumbnailData) => {
        this.thumbnailData = thumbnailData
      })
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
        this.videoService.generateThumbnail(file).then((thumbnailData) => {
          this.tutorForm.get('video')?.patchValue({
            thumbnail: thumbnailData
          })
          //console.dir(thumbnailData);
          this.thumbnailData = thumbnailData
        })
        this.format = 'video'
      }
      reader.onload = (event) => {
        this.urlVideo = (<FileReader>event.target).result as string
      }
    }
  }
}

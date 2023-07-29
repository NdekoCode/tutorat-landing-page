/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import slugify from 'slugify'
import { MYSPACE_ROUTES } from 'src/app/core/routes/routes'
import {
  ALERT_AUTH,
  DOCUMENT_IDENTITY_TYPE
} from 'src/app/core/utilities/constants'
import { isEmptyObject, isExists } from 'src/app/core/utilities/helpers'
import { ITutor } from 'src/app/core/utilities/interfaces'
import {
  Alert,
  Course,
  Document,
  DocumentType,
  FileObject,
  FileType,
  Timer,
  TutorCredentials,
  User,
  Video
} from 'src/app/core/utilities/types'
import { ApiConfigService } from 'src/app/shared/services/api-config/api-config.service'
import { CoursesService } from 'src/app/shared/services/courses/courses.service'
import { DocumentService } from 'src/app/shared/services/document/document.service'
import { VideoProcessingService } from 'src/app/shared/services/video-processing.service'
import { TutorService } from '../../../../shared/services/tutor/tutor.service'

@Component({
  selector: 'app-tutors-supplement-form',
  templateUrl: './tutors-supplement-form.component.html',
  styleUrls: ['./tutors-supplement-form.component.scss']
})
export class TutorsSupplementFormComponent implements OnInit {
  user!: ITutor | User | null
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
  timer: Timer
  submitForm: boolean = false
  isLoading: boolean = false
  isChange: boolean = false
  inVerification: boolean = false

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

  // Files
  thumbnailData!: string
  documentFiles!: FileObject
  photoFile!: FileType
  videoFiles!: FileObject

  // FormData
  documentFormData: Document[] = []
  tutorFormData!: TutorCredentials
  videoFormData!: Video
  imageFormData!: string

  // eslint-disable-next-line max-params
  constructor(
    private formBuilder: FormBuilder,
    private apiConfig: ApiConfigService,
    private courseService: CoursesService,
    private videoService: VideoProcessingService,
    private documentService: DocumentService,
    private tutorService: TutorService
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
    this.tutorService.userService.getUserAuth().subscribe((response) => {
      this.user = response as User

      if (
        this.tutorService.meIsTutor(this.user) &&
        this.tutorService.tutorCompletedProfile(this.user.tutor!)
      ) {
        this.apiConfig.router.navigate([MYSPACE_ROUTES.HOME])
      }
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

  onVideoSelectFile(event: Event) {
    const target = event.target as HTMLInputElement
    const file = target.files && target.files[0]
    if (file) {
      if (!this.videoFiles) {
        this.videoFiles = {}
      }
      this.videoFiles['videoUrl'] = file

      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = () => {
        this.urlVideo = reader.result as string
      }

      if (file.type.indexOf('image') > -1) {
        this.format = 'image'
      } else if (file.type.indexOf('video') > -1) {
        this.videoService
          .generateThumbnail(file)
          .then((thumbnailData) => {
            this.tutorForm.get('video')?.patchValue({
              thumbnail: thumbnailData
            })
            this.thumbnailData = thumbnailData
            this.videoFiles['videoThumbnail'] = thumbnailData
          })
          .catch((error) => {
            // Gérer les erreurs lors de la génération de la miniature
          })
        this.format = 'video'
      }
    }
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
      const file = target.files[0]
      const reader = new FileReader()
      this.photoFile = file

      reader.onload = () => {
        this.imagePath = reader.result as string
      }

      reader.readAsDataURL(file)
    }
  }

  onDocumentSelected(event: Event, index: number) {
    const target = event.target as HTMLInputElement
    const files = target.files
    if (files && files[0]) {
      const file = files[0]
      if (!this.documentFiles) {
        this.documentFiles = {}
      }
      this.documentFiles[index] = file

      const reader = new FileReader()
      reader.onload = () => {
        if (!this.documentItem) {
          this.documentItem = {}
        }
        this.documentItem[index] = reader.result as string
      }

      reader.readAsDataURL(file)
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
        startDate: ['', Validators.required],
        endDate: ['', Validators.required]
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
  // eslint-disable-next-line max-statements
  async saveTutorForm() {
    this.submitForm = false
    // Soumettre le formulaire et effectuer les actions nécessaires
    // eslint-disable-next-line no-console
    if (this.tutorForm.valid) {
      try {
        this.submitForm = false
        this.inVerification = true
        this.isLoading = true

        // Envoyer les données au serveur ici
        await this.uploadDocument()
        await this.uploadVideo()
        await this.uploadImage()
        this.tutorFormData = {
          bio: this.tutorForm.value.bio,
          hourlyRate: this.tutorForm.value.hourlyRate,
          transport: this.tutorForm.value.transport,
          video: this.videoFormData,
          document: this.documentFormData,
          experience: this.tutorForm.value.experience,
          specialization: this.selectedSpecializations
        }
        if (!this.tutorService.meIsTutor(this.user!)) {
          this.tutorService.userService.makeMeTutor().subscribe((_response) => {
            this.tutorService.updateTutorData(this.tutorFormData).subscribe({
              next: (response) => {
                this.alert = {
                  isShown: true,
                  alertTitle: ALERT_AUTH.tutor.success.alertTitle,
                  alertType: 'error',
                  alertMessage: response.message
                }

                this.desabledModal()
              },
              error: (httpErrorResponse) => {
                console.log(httpErrorResponse)
                this.alert = {
                  isShown: true,
                  alertTitle: ALERT_AUTH.tutor.error.alertTitle,
                  alertType: 'error',
                  alertMessage: httpErrorResponse.error.message
                }

                this.desabledModal()
              }
            })
          })
        } else {
          this.tutorService.updateTutorData(this.tutorFormData).subscribe({
            next: (response) => {
              this.alert = {
                isShown: true,
                alertTitle: ALERT_AUTH.tutor.success.alertTitle,
                alertType: 'success',
                alertMessage: response.message
              }

              this.desabledModal()
            },
            error: (httpErrorResponse) => {
              console.log(httpErrorResponse)
              this.alert = {
                isShown: true,
                alertTitle: ALERT_AUTH.tutor.error.alertTitle,
                alertType: 'error',
                alertMessage: httpErrorResponse.error.message
              }

              this.desabledModal()
            }
          })
        }
      } catch (err) {
        console.log(err, this.tutorForm.value)
        this.alert = {
          isShown: true,
          alertTitle: ALERT_AUTH.tutor.error.alertTitle,
          alertType: 'error',
          alertMessage: "Erreur lors de l'upload"
        }
        this.desabledModal()
      }
    } else {
      this.alert = {
        isShown: true,
        alertTitle: ALERT_AUTH.tutor.error.alertTitle,
        alertType: 'error',
        alertMessage:
          'Le formulaire est invalide veuillez verifier les champs requis'
      }
      // Afficher des erreurs ou messages de validation ici
      console.log(
        'Formulaire invalide',
        this.documentFiles,
        this.videoFiles,
        this.photoFile
      )
      this.desabledModal()
    }
  }
  desabledModal() {
    this.submitForm = true
    this.inVerification = false
    this.isLoading = false
  }
  async uploadDocument() {
    const documentFormArray = this.tutorForm.get('document') as FormArray
    this.documentFormData = this.tutorForm.get('document')?.value
    let documentDir = ''
    if (!isEmptyObject(this.documentFiles)) {
      for (const index in this.documentFiles) {
        const documentType = documentFormArray?.at(+index).get('documentType')

        if (isExists(this.documentFiles[index])) {
          const file = this.documentFiles[index] as File
          if (file) {
            if (
              +documentType?.value === DOCUMENT_IDENTITY_TYPE.ID_CARD ||
              +documentType?.value === DOCUMENT_IDENTITY_TYPE.PASSPORT
            ) {
              documentDir = 'ids'
            } else {
              documentDir = 'diploma'
            }
            const path = `/${documentDir}/${file.name}`
            // eslint-disable-next-line no-await-in-loop
            const uploadTask = await this.apiConfig.upload.fireStorage.upload(
              path,
              file
            )
            const documentUrl = await uploadTask.ref.getDownloadURL()
            this.documentFormData[+index].documentUrl = documentUrl
            this.documentFormData[+index].documentType =
              +this.documentFormData[+index].documentType
            console.log(this.documentFormData, this.tutorForm.value)
          }
        }
      }
    }
  }

  async uploadVideo() {
    if (!isEmptyObject(this.videoFiles)) {
      for (const index in this.videoFiles) {
        if (isExists(this.videoFiles[index])) {
          const videoUrl = this.videoFiles['videoUrl'] as File
          const videoThumbnail = this.videoFiles['videoThumbnail']
          if (videoUrl && videoThumbnail) {
            const videoName = slugify(videoUrl.name)
            const pathVideoUrl = `/videos/${videoName}`
            const pathThumbnail = `/thumbnails`
            const uploadTask = await this.apiConfig.upload.fireStorage.upload(
              pathVideoUrl,
              videoUrl
            )
            console.log(videoThumbnail)
            const url = await uploadTask.ref.getDownloadURL()
            const thumbnail = await this.apiConfig.upload.uploadImage(
              videoThumbnail as string,
              pathThumbnail
            )
            const videoFormGroup = this.tutorForm.get('video') as FormGroup
            this.videoFormData = videoFormGroup?.value
            this.videoFormData = {
              ...this.videoFormData,
              ...{
                url,
                thumbnail
              }
            }
            console.log(url, this.tutorForm.value)
          }
        }
      }
    }
  }
  async uploadImage() {
    if (isExists(this.photoFile)) {
      const imageUrl = this.photoFile as File

      const imageName = slugify(imageUrl.name)
      const pathImageUrl = `/avatars/${imageName}`
      const uploadTask = await this.apiConfig.upload.fireStorage.upload(
        pathImageUrl,
        imageUrl
      )
      const photo = await uploadTask.ref.getDownloadURL()
      this.imageFormData = photo
      console.log(this.imageFormData, this.tutorForm.value)
    }
  }
}

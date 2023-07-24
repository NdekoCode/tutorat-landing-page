import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { hourlyRateErrorsInput } from 'src/app/core/utilities/forms'
import { Alert, Timer } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-tutors-supplement-form',
  templateUrl: './tutors-supplement-form.component.html',
  styleUrls: ['./tutors-supplement-form.component.scss']
})
export class TutorsSupplementFormComponent implements OnInit {
  tutorSupplementForm!: FormGroup
  imagePath: string | undefined = '/assets/images/avatar.png'
  currentStep: number = 1
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

  fb = new FormBuilder()
  tutorForm!: FormGroup
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.tutorForm = this.formBuilder.group({
      photo: ['', Validators.required],
      bio: ['', Validators.required],
      hourlyRate: ['', Validators.required],
      transport: ['', Validators.required],
      specialization: this.formBuilder.array([]),
      video: this.formBuilder.group({
        url: ['', Validators.required],
        thumbnail: ['', Validators.required],
        description: ['', Validators.required]
      }),
      experience: this.formBuilder.array([]),
      document: this.formBuilder.array([])
    })
  }

  nextStep() {
    this.currentStep++
  }

  previousStep() {
    this.currentStep--
  }

  saveTutorForm() {
    // Soumettre le formulaire et effectuer les actions nécessaires
    // eslint-disable-next-line no-console
    if (this.tutorSupplementForm.valid) {
      // Envoyez les données du formulaire au serveur
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
}

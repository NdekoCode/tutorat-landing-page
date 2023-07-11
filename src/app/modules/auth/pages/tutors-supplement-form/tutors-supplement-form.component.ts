import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
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
  timer: Timer
  submitForm: boolean = false
  isLoading: boolean = false
  isChange: boolean = false
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.tutorSupplementForm = this.formBuilder.group({
      // Step 1: Informations personnelles
      /*
      city: ['', Validators.required], // Champ pour la ville
      country: ['', Validators.required], // Champ pour le pays
      address: ['', Validators.required], // Champ pour l'adresse
      postalCode: ['', Validators.required], // Champ pour le code postal */
      photo: ['', Validators.required], // Champ pour la photo de profil
      biography: ['', Validators.required],
      hourlyRate: [0, Validators.required],

      // Step 4: Préférences de tutorat
      // Ajoutez les champs pour les préférences de tutorat
      subject: ['', Validators.required], // Champ pour le sujet de tutorat
      tutoringType: ['', Validators.required], // Champ pour le type de tutorat (en ligne ou en présentiel)

      // Step 6: Antécédents judiciaires
      documentCheck: ['', Validators.required] // Champ pour la vérification des antécédents judiciaires
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
      // eslint-disable-next-line no-console
      console.log(this.tutorSupplementForm.value)
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

import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-tutors-supplement-form',
  templateUrl: './tutors-supplement-form.component.html',
  styleUrls: ['./tutors-supplement-form.component.scss']
})
export class TutorsSupplementFormComponent implements OnInit {
  tutorSupplementForm!: FormGroup
  currentStep: number = 1

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.tutorSupplementForm = this.formBuilder.group({
      // Step 1: Informations personnelles
      photo: ['', Validators.required], // Champ pour la photo de profil
      city: ['', Validators.required], // Champ pour la ville
      country: ['', Validators.required], // Champ pour le pays
      address: ['', Validators.required], // Champ pour l'adresse
      postalCode: ['', Validators.required], // Champ pour le code postal

      // Step 2: Informations professionnelles
      experienceYear: ['', Validators.required], // Champ pour l'année d'expérience
      educationLevel: ['', Validators.required], // Champ pour le niveau d'études
      educationDomain: ['', Validators.required], // Champ pour le domaine d'études
      timePeriod: [''], // Champ pour la période de temps
      currentlyEnrolled: [false], // Champ pour indiquer si l'utilisateur est actuellement inscrit
      sinceMonth: [''], // Champ pour le mois de début d'inscription
      sinceYear: [''], // Champ pour l'année de début d'inscription

      // Step 3: Disponibilité
      timezone: ['', Validators.required], // Champ pour la timezone
      days: this.formBuilder.group({
        monday: this.formBuilder.group({
          active: [false], // Checkbox pour activer ou désactiver le jour
          start: [''], // Champ pour l'heure de début de disponibilité
          end: [''] // Champ pour l'heure de fin de disponibilité
        }),
        tuesday: this.formBuilder.group({
          active: [false],
          start: [''],
          end: ['']
        }),
        // Ajoutez les autres jours de la semaine de la même manière
        wednesday: this.formBuilder.group({
          active: [false],
          start: [''],
          end: ['']
        }),
        thursday: this.formBuilder.group({
          active: [false],
          start: [''],
          end: ['']
        }),
        friday: this.formBuilder.group({
          active: [false],
          start: [''],
          end: ['']
        }),
        saturday: this.formBuilder.group({
          active: [false],
          start: [''],
          end: ['']
        }),
        sunday: this.formBuilder.group({
          active: [false],
          start: [''],
          end: ['']
        })
      }),

      // Step 4: Préférences de tutorat
      // Ajoutez les champs pour les préférences de tutorat
      subject: ['', Validators.required], // Champ pour le sujet de tutorat
      schoolLevel: ['', Validators.required], // Champ pour le niveau scolaire
      tutoringType: ['', Validators.required], // Champ pour le type de tutorat (en ligne ou en présentiel)
      studentType: ['', Validators.required], // Champ pour le type d'élève (âge
      // ...

      // Step 4: Préférences de tutorat
      // Step 5: Compétences en communication
      writtenCommunication: ['', Validators.required], // Champ pour les compétences en communication écrite
      oralCommunication: ['', Validators.required], // Champ pour les compétences en communication orale
      problemSolving: ['', Validators.required], // Champ pour les compétences en résolution de problèmes
      decisionMaking: ['', Validators.required], // Champ pour les compétences en prise de décision

      // Step 6: Antécédents judiciaires
      backgroundCheck: ['', Validators.required] // Champ pour la vérification des antécédents judiciaires
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
}

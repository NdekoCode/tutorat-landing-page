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
      ville: ['', Validators.required], // Champ pour la ville
      pays: ['', Validators.required], // Champ pour le pays
      address: ['', Validators.required], // Champ pour l'adresse
      codePostal: ['', Validators.required], // Champ pour le code postal

      // Step 2: Informations professionnelles
      anneeExperience: ['', Validators.required], // Champ pour l'année d'expérience
      niveauEtudes: ['', Validators.required], // Champ pour le niveau d'études
      domaineEtudes: ['', Validators.required], // Champ pour le domaine d'études
      periodeTemps: [''], // Champ pour la période de temps
      actuellementInscrit: [false], // Champ pour indiquer si l'utilisateur est actuellement inscrit
      depuisMois: [''], // Champ pour le mois de début d'inscription
      depuisAnnee: [''], // Champ pour l'année de début d'inscription

      // Step 3: Disponibilité
      timezone: ['', Validators.required], // Champ pour la timezone
      jours: this.formBuilder.group({
        lundi: this.formBuilder.group({
          active: [false], // Checkbox pour activer ou désactiver le jour
          debut: [''], // Champ pour l'heure de début de disponibilité
          fin: [''] // Champ pour l'heure de fin de disponibilité
        }),
        mardi: this.formBuilder.group({
          active: [false],
          debut: [''],
          fin: ['']
        }),
        // Ajoutez les autres jours de la semaine de la même manière
        mercredi: this.formBuilder.group({
          active: [false],
          debut: [''],
          fin: ['']
        }),
        jeudi: this.formBuilder.group({
          active: [false],
          debut: [''],
          fin: ['']
        }),
        vendredi: this.formBuilder.group({
          active: [false],
          debut: [''],
          fin: ['']
        }),
        samedi: this.formBuilder.group({
          active: [false],
          debut: [''],
          fin: ['']
        }),
        dimanche: this.formBuilder.group({
          active: [false],
          debut: [''],
          fin: ['']
        })
      }),

      // Step 4: Préférences de tutorat
      // Ajoutez les champs pour les préférences de tutorat
      sujet: ['', Validators.required], // Champ pour le sujet de tutorat
      niveauScolaire: ['', Validators.required], // Champ pour le niveau scolaire
      typeTutorat: ['', Validators.required], // Champ pour le type de tutorat (en ligne ou en présentiel)
      typeEleve: ['', Validators.required], // Champ pour le type d'élève (âge
      // ...

      // Step 4: Préférences de tutorat
      // Step 5: Compétences en communication
      communicationEcrite: ['', Validators.required], // Champ pour les compétences en communication écrite
      communicationOrale: ['', Validators.required], // Champ pour les compétences en communication orale
      resolutionProblemes: ['', Validators.required], // Champ pour les compétences en résolution de problèmes
      priseDecision: ['', Validators.required], // Champ pour les compétences en prise de décision

      // Step 6: Antécédents judiciaires
      verificationAntecedents: ['', Validators.required] // Champ pour la vérification des antécédents judiciaires
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

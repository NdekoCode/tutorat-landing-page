export type AlertType = 'error' | 'success' | 'infos' | 'warning'
export type UtilityType =
  | string
  | number
  | object
  | (string | number | object)[]
export type AlertColorMap = {
  [key in AlertType]: string
}
export type Timer = number | undefined
export type ErrorRequest = {
  statusCode: number
  message: string | string[]
  error: string
}

export type Alert = {
  isShown: boolean
  alertTitle: string
  alertMessage: string
  alertType: AlertType
}
export type LoginCredentials = {
  email: string
  password: string
}

export type SignupCredentials = {
  firstName: string
  lastName: string
  confirmPassword: string
  phoneNumber: string
  email: string
  password: string
}

export type PasswordCredentials = {
  confirmPassword: string
  password: string
}

export type Token = {
  accessToken: string
  refreshToken: string
}
export type AlertSuccess = {
  statusCode: number
  message: string
}
export type Tutor = {
  photo: string
  ville: string
  pays: string
  address: string
  codePostal: string
  anneeExperience: number
  niveauEtudes: string
  domaineEtudes: string
  periodeTemps: string
  actuellementInscrit: boolean
  depuisMois: string
  depuisAnnee: string
  timezone: string
  jours: {
    lundi: {
      active: boolean
      debut: string
      fin: string
    }
    mardi: {
      active: boolean
      debut: string
      fin: string
    }
    // Ajoutez les autres jours de la semaine de la même manière
  }
  // Ajoutez les propriétés pour les autres étapes du formulaire
}
export type JoursSemaine = {
  lundi: boolean
  mardi: boolean
  // Ajoutez les autres jours de la semaine
}

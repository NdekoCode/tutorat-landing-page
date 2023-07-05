export type AlertType = 'error' | 'success' | 'infos' | 'warning'
export type ResponseDefault = string | number | object
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
export interface IloginCredentials {
  email: string
  password: string
}

export interface IsignupCredentials {
  firstName: string
  lastName: string
  confirmPassword: string
  phoneNumber: string
  email: string
  password: string
}

export interface IPasswordCredentials {
  confirmPassword: string
  password: string
}

export interface IToken {
  accessToken: string
  refreshToken: string
}
export interface IAlertSuccess {
  statusCode: number
  message: string
}
export interface Tutor {
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
export interface JoursSemaine {
  lundi: boolean
  mardi: boolean
  // Ajoutez les autres jours de la semaine
}

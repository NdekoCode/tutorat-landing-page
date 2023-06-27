export type AlertType = 'error' | 'success' | 'infos' | 'warning'
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

export interface IToken {
  accessToken: string
  refreshToken: string
}
export interface IAlertSuccess {
  statusCode: number
  message: string
}

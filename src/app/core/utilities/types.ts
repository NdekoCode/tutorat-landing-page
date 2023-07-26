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
export type Experience = {
  enterprise: string
  poste: string
  startTime: Date
  endTime: Date
}
export type DocumentDataType = 'IDENTITY' | 'CERTIFICATION'
export type Video = {
  url: string
  thumbnail?: string
  description?: string
}
export type Document = {
  documentUrl: string
  description: string
  documentType: number | string
}
export type DocumentType = {
  id: string | number
  name: string
}
export type Course = {
  id: number
  name: string
  description: string
}
export type Address = {
  address: string
  city: string
  postalCode: string
  state: string
}

export type User = {
  id: number | string
  firstName: string
  lastName: string
  age: number
  gender: string
  email: string
  phone: string
  password?: string | ''
  image: string
  address: {
    address: string
    city: string
    postalCode: string
    state: string
  }
  tutor: Tutor | null
}
export type Tutor = {
  bio: string
  hourlyRate: number
  transport: number
  specialization: (number | string)[]
  video: Video
  experience?: Experience[]
  document?: Document[]

  address: Address
}
export type ErrorValidationType = {
  key: string
  message: string
}
export type UserExperience = {
  enterprise: string
  poste: string
  startTime: Date
  endTime: Date
}

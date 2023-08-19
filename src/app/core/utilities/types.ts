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
export type TutorCredentials = {
  bio: string
  hourlyRate: number
  transport: number
  specialization: (number | string)[]
  video: Video
  experience: [
    {
      enterprise: string
      poste: string
      startDate: Date
      endDate: Date
    }
  ]
  document: Document[]
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
  startDate: Date
  endDate: Date
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
  gender: string
  email: string
  phoneNumber: string
  password?: string | ''
  image: string
  address?: Address
  tutor: Tutor | null
}

export type UpdateCredentialUser = {
  firstName?: string
  lastName?: string
  gender?: string
  phoneNumber?: string
  avatar?: string
  address?: Address
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
  startDate: Date
  endDate: Date
}
export type CloudinaryConfigType = {
  CLOUDINARY_CLOUD_NAME: string
  CLOUDINARY_API_KEY: string
  CLOUDINARY_API_SECRET: string
  CLOUDINARY_PRESET: string
  CLOUDINARY_URL: string
}
export type CloudinaryResponse = {
  secure_url: string
  public_id: string
}
export type FileObject = { [key: string | number]: string | File }
export type FileType = string | File

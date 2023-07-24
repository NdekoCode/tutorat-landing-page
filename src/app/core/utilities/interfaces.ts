import { Tutor } from './types'

export interface ITutor {
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
  tutor: Tutor
}

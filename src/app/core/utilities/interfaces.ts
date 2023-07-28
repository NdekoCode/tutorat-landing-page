import { Experience } from './types'

export interface IUser {
  id: number
  firstName: string
  lastName: string
  avatar: string
  address: {
    id: number
    city: string
    country: string
    userId: number
  }
  gender?: string
}
export interface IVideo {
  id: number
  url: string
  thumbnail: string
  description: string
  tutorId: number
  likes?: never[]
  createdAt?: string
  updatedAt?: string
}
export interface ITutor {
  userId: number
  bio: string
  hourlyRate: number
  transport: number
  createdAt?: string
  updatedAt?: string
  user: IUser
  specialization: ISpecialization[]
  experience?: Experience[]
  video: IVideo
  document: Document[]
}
export interface ISpecialization {
  id: number
  name: string
  description: string
  createdAt?: string
  updatedAt?: string
}

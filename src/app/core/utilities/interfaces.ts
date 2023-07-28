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
export const NewTutor = {
  userId: 14,
  bio: "Je suis un passioné de l'enseignement avec une expérience de plus de 10 ans. Je place toujours les apprenants au centre de la formation avec une pédagogie interactive.",
  hourlyRate: 50000,
  transport: 5000,
  createdAt: '2023-07-24T11:44:30.172Z',
  updatedAt: '2023-07-26T08:13:45.190Z',
  user: {
    id: 14,
    firstName: 'Marcos',
    lastName: 'Musafiri',
    avatar:
      'https://lh3.googleusercontent.com/a/AAcHTtewXykxbvFdFubvV9SiCzqyVdsiFOcVADrH7j_sA9aKHLlc=s96-c',
    address: {
      id: 18,
      city: 'Goma',
      country: 'Congo, The Democratic Republic of the',
      userId: 14
    },
    gender: null
  },
  specialization: [
    {
      id: 1,
      name: 'Math',
      description: '',
      createdAt: '2023-07-19T13:02:21.303Z',
      updatedAt: '2023-07-19T13:01:39.211Z'
    },
    {
      id: 3,
      name: 'Philosophie',
      description: '',
      createdAt: '2023-07-24T11:53:33.091Z',
      updatedAt: '2023-07-24T11:50:21.535Z'
    }
  ],
  experience: [],
  video: {
    id: 1,
    url: 'https://res.cloudinary.com/marcosmus/video/upload/v1690358114/profile-pictures/m3nob8a1blbvy7avnpwl.mp4',
    thumbnail:
      'https://res.cloudinary.com/marcosmus/image/upload/v1690358118/profile-pictures/ksoa8tdmgpjuydlb2c5n.jpg',
    description:
      'Dans cette video discover my teaching style, this is an intro to computer science.',
    tutorId: 14,
    likes: [],
    createdAt: '2023-07-26T08:13:45.484Z',
    updatedAt: '2023-07-26T08:13:45.484Z'
  },
  document: []
}

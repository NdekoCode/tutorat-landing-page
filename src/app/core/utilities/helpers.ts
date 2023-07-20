import { USERS } from './constants'
import { Tutor, User, UtilityType } from './types'

export function objectHasValue(obj: { [key: string]: UtilityType }): boolean {
  if (!isEmptyObject(obj)) {
    // Vérifie si l'objet existe et n'est pas vide

    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key]!) {
        // Vérifie si au moins une des propriétés a une valeur réellement existante
        return true
      }
    }
  }

  return false
}
/* eslint-disable no-undefined */
export function isEmptyObject(value: object | null | undefined) {
  return (
    isExists(value) &&
    ((Object.keys(value!).length < 1 && value?.constructor === Object) ||
      JSON.stringify(value) === '{}' ||
      Object.getOwnPropertyNames(value).length === 0)
  )
}

export function isExists<T>(value: T): boolean {
  return typeof value !== 'undefined' && value !== null
}
export function hasProperties(
  object: { [key: string]: unknown },
  keys: string[] | string,
  noEmpty = false
): boolean {
  // Vérifier si l'objet est défini  ou si les clés sont définies
  if (!isExists(object) || !isExists(keys)) {
    return false
  }

  // Convertir une chaîne de caractères en tableau de clés
  if (typeof keys === 'string') {
    keys = [keys]
  }
  let allKeysPresent: boolean = false
  // Vérifier si toutes les clés sont présentes dans l'objet
  if (noEmpty) {
    allKeysPresent = keys.every(
      (key) => object.hasOwnProperty(key) && isExists(object[key])
    )
  } else {
    allKeysPresent = keys.every((key) => object.hasOwnProperty(key))
  }
  if (!allKeysPresent) {
    return false
  }
  // Toutes les clés sont présentes dans l'objet
  return true
}
export function localStorageSetItem(key: string, value: UtilityType): void {
  try {
    const serializedValue = JSON.stringify(value)
    window.localStorage.setItem(key, serializedValue)
  } catch (e) {
    console.error('Erreur lors de la sérialisation de la valeur', e)
  }
}

export function localStorageGetItem<T>(key: string): T | null {
  const serializedValue = localStorage.getItem(key)

  if (serializedValue) {
    try {
      return JSON.parse(serializedValue) as T
    } catch (e) {
      console.error('Erreur lors de la désérialisation de la valeur', e)
      return null
    }
  }
  return null
}
export function formatURL(
  url: string,
  params: { [key: string]: string } = {}
): string {
  let formattedURL = url

  // Supprimer le premier slash
  if (formattedURL.startsWith('/')) {
    formattedURL = formattedURL.substring(1)
  }
  if (isExists(params) && !isEmptyObject(params)) {
    // Remplacer les paramètres spécifiques par les nouvelles valeurs
    Object.keys(params).forEach((param) => {
      formattedURL = formattedURL.replace(param, params[param])
    })
  }

  return formattedURL
}
export function generateArray(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i)
}
export function getUsers(tutor: boolean = false): (User | Tutor)[] | [] {
  if (tutor) {
    return USERS.filter((user) => isExists(user.tutor))
  }
  return USERS.filter((user) => isEmptyObject(user.tutor))
}

export function filterTutor(
  data: User[],
  filters: Partial<Tutor & { city: string; cours?: string | number }>
): User[] {
  return data.filter((entry) => {
    const tutor = entry.tutor!
    let isValid = true

    if (
      filters.hourlyRate &&
      tutor?.hourlyRate * 2300 > filters.hourlyRate * 2300
    ) {
      isValid = false
    }

    if (filters.cours && !tutor.specialization.includes(filters.cours)) {
      isValid = false
    }

    if (
      filters.city &&
      tutor.address.city.toLowerCase() !== filters.city.toLowerCase()
    ) {
      isValid = false
    }

    return isValid
  })
}
export function getLimitData(
  data: UtilityType[],
  limit: number
): UtilityType[] {
  return data.slice(0, limit)
}
type EventParticipant = {
  image: string
}

type Event = {
  title: string
  schedule: string
  participants: EventParticipant[]
  numberOfParticipants: string
}

type Day = {
  day: number
  events?: Event[]
}

type Month = {
  name: string
  days: Day[]
}

type Calendar = {
  year: number
  months: Month[]
}

export function generateCalendar(date: string): Calendar {
  const [day, month, year] = date.split('/')

  const calendar: Calendar = {
    year: parseInt(year),
    months: [
      {
        name: getMonthName(parseInt(month)),
        days: generateDays(parseInt(day), parseInt(month), parseInt(year))
      }
    ]
  }

  return calendar
}

export function getMonthName(month: number): string {
  const monthList = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ]

  return monthList[month - 1]
}

export function generateDays(day: number, month: number, year: number): Day[] {
  const numberOfDays = new Date(year, month, 0).getDate()
  const daysList: Day[] = []

  for (let i = 1; i <= numberOfDays; i++) {
    const dayObj: Day = {
      day: i
    }

    if (i === day) {
      dayObj.events = generateEvents()
    }

    daysList.push(dayObj)
  }

  return daysList
}

export function generateEvents(): Event[] {
  const event: Event = {
    title: 'Chemistry Session',
    schedule: '12:00-14:00',
    participants: [
      { image: '/assets/images/user-1.png' },
      { image: '/assets/images/user-3.png' }
    ],
    numberOfParticipants: '2'
  }

  return [event]
}

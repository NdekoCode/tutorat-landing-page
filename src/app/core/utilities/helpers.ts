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
export function hasProperties(objet: object, keys: string[] | string): boolean {
  // Vérifier si l'objet est défini  ou si les clés sont définies
  if (!isExists(objet) || !isExists(keys)) {
    return false
  }

  // Convertir une chaîne de caractères en tableau de clés
  if (typeof keys === 'string') {
    keys = [keys]
  }

  // Vérifier si toutes les clés sont présentes dans l'objet
  const allKeysPresent = keys.every((key) => objet.hasOwnProperty(key))
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

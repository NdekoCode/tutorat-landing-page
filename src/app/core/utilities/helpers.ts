import { UtilityType } from './types'

/* eslint-disable no-undefined */
export function isEmptyObject(value: object) {
  return (
    value &&
    ((Object.keys(value).length < 1 && value.constructor === Object) ||
      JSON.stringify(value) === '{}' ||
      Object.getOwnPropertyNames(value).length === 0)
  )
}

export function isExists<T>(value: T): boolean {
  return typeof value !== 'undefined' && value !== null
}
export function hasProperties(objet: object, keys: string[] | string): boolean {
  // Vérifier si l'objet est défini
  if (objet === undefined || objet === null) {
    return false
  }

  // Vérifier si les clés sont définies
  if (keys === undefined || keys === null) {
    return false
  }

  // Convertir une chaîne de caractères en tableau de clés
  if (typeof keys === 'string') {
    keys = [keys]
  }

  // Vérifier si toutes les clés sont présentes dans l'objet
  for (const key of keys) {
    if (!objet.hasOwnProperty(key)) {
      return false
    }
  }

  // Toutes les clés sont présentes dans l'objet
  return true
}
export function localStorageSetItem(key: string, value: UtilityType): void {
  const serializedValue = JSON.stringify(value)
  window.localStorage.setItem(key, serializedValue)
}

export function localStorageGetItem<T>(key: string): T | null {
  const serializedValue = localStorage.getItem(key)
  if (serializedValue) {
    return JSON.parse(serializedValue) as T
  }
  return null
}

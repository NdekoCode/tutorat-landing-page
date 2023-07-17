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

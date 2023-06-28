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
export function hasProperties(objet: object, cles: string[] | string): boolean {
  // Vérifier si l'objet est défini
  if (objet === undefined || objet === null) {
    return false
  }

  // Vérifier si les clés sont définies
  if (cles === undefined || cles === null) {
    return false
  }

  // Convertir une chaîne de caractères en tableau de clés
  if (typeof cles === 'string') {
    cles = [cles]
  }

  // Vérifier si toutes les clés sont présentes dans l'objet
  for (const cle of cles) {
    if (!objet.hasOwnProperty(cle)) {
      return false
    }
  }

  // Toutes les clés sont présentes dans l'objet
  return true
}

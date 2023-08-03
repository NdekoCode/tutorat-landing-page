import { Injectable } from '@angular/core'
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { firstValueFrom, lastValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private fireServiceStorage: AngularFireStorage) {}
  get fireStorage() {
    return this.fireServiceStorage
  }

  // Fonction pour supprimer les préfixes des données d'image
  // eslint-disable-next-line class-methods-use-this
  removeDataPrefix(data: string): string {
    const prefixes = [
      'data:image/jpeg;base64,',
      'data:image/png;base64,',
      'data:image/gif;base64,'
    ]
    for (const prefix of prefixes) {
      if (data.startsWith(prefix)) {
        return data.substring(prefix.length)
      }
    }
    return data
  }

  // Fonction pour uploader l'image sur Firebase Storage
  // Fonction pour uploader l'image sur Firebase Storage
  async uploadBase64Image(data: string, path: string) {
    const storageRef = this.fireStorage.ref(path)
    // const message = this.removeDataPrefix(data)
    await storageRef.putString(data, 'base64')
    const imageUrl = await firstValueFrom(storageRef.getDownloadURL())
    return imageUrl
  }
  async uploadImage(base64Image: string, path: string) {
    // Convertir l'image de base64 en blob
    const response = await fetch(base64Image)
    const blob = await response.blob()

    // Générer un nom de fichier unique pour l'image
    const fileName = `image_${new Date().getTime()}.png`

    // Définir le chemin de stockage sur Firebase
    const storageRef = this.fireStorage.ref(path + '/' + fileName)

    try {
      // Télécharger l'image sur Firebase
      const uploadTask = await this.fireStorage.upload(
        path + '/' + fileName,
        blob
      )

      // Obtenir l'URL de téléchargement de l'image après sa mise en ligne
      const snapshot = await uploadTask.ref.getDownloadURL()

      const downloadURL = await lastValueFrom(storageRef.getDownloadURL())
      return downloadURL
    } catch (error) {
      console.error("Erreur lors du téléchargement de l'image:", error)
    }
  }
}

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  isShown: boolean = false
  onToggleShow() {
    this.isShown = !this.isShown
  }
}

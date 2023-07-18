import { Injectable } from '@angular/core'
import { ToggleService } from './toggle.service'

@Injectable({
  providedIn: 'root'
})
export class ToggleVideoService {
  constructor(public toggleService: ToggleService) {}
  videoId: string = 'E1nLfCSarT8'
  setVideoId(videoId: string) {
    this.videoId = videoId
  }
  onShow(arg: Event | boolean) {
    this.toggleService.onToggleShow()
  }
}

import { Component, Input } from '@angular/core'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { ToggleVideoService } from 'src/app/shared/services/toggle/toggle-video.service'

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.scss']
})
export class TutorCardComponent {
  @Input() tutor!: ITutor

  constructor(private toggleVideoService: ToggleVideoService) {}
  get isShown() {
    return this.toggleVideoService.toggleService.isShown
  }
  get videoId() {
    return this.toggleVideoService.videoId
  }
  ngOnInit(): void {
    this.toggleVideoService.setVideoId('E1nLfCSarT8')
  }
  onToggleShow() {
    this.toggleVideoService.toggleService.onToggleShow()
  }
  onShow(arg: Event | boolean) {
    this.onToggleShow()
  }
}

import { Component, OnInit } from '@angular/core'
import { ToggleVideoService } from '../../../../shared/services/toggle/toggle-video.service'

@Component({
  selector: 'app-block-video',
  templateUrl: './block-video.component.html',
  styleUrls: ['./block-video.component.scss']
})
export class BlockVideoComponent implements OnInit {
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

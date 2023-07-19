import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { isExists } from 'src/app/core/utilities/helpers'

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit {
  @Input() isShown: boolean = false
  @Input() style: string = ''
  @Output() showModal = new EventEmitter<boolean>()

  apiLoaded: boolean = false

  videoUrl: string = 'https://www.youtube.com/embed/'
  @Input() completeUrl!: string
  @Input() videoId!: string
  public videoSrc!: string

  constructor(private sanitizer: DomSanitizer) {}
  setVideoId(videoId: string) {
    this.videoId = videoId
  }
  ngOnInit(): void {
    this.videoUrl += this.videoId
    if (isExists(this.completeUrl)) {
      this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.completeUrl
      ) as string
    } else {
      this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.videoUrl
      ) as string
    }
  }
  onShow() {
    this.showModal.emit(!this.isShown)
  }
  // eslint-disable-next-line class-methods-use-this
  stopProp(e: Event) {
    e.stopPropagation()
  }
}

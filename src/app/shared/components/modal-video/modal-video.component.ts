import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit {
  @Input() isShown: boolean = false
  @Output() showModal = new EventEmitter<boolean>()

  apiLoaded: boolean = false

  videoUrl: string = 'https://www.youtube.com/embed/'
  @Input() videoId!: string
  public videoSrc!: string

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.videoUrl += this.videoId
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.videoUrl
    ) as string
  }
  onShow() {
    this.showModal.emit(!this.isShown)
  }
  // eslint-disable-next-line class-methods-use-this
  stopProp(e: Event) {
    e.stopPropagation()
  }
}

import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { GLOBAL_CONSTANTS } from 'src/app/core/utilities/constants'
import { ITutor } from 'src/app/core/utilities/interfaces'
import { Timer } from 'src/app/core/utilities/types'

@Component({
  selector: 'app-tutor-carousel',
  templateUrl: './tutor-carousel.component.html',
  styleUrls: ['./tutor-carousel.component.scss']
})
export class TutorCarouselComponent implements OnInit, OnDestroy {
  @Input() items!: ITutor[]
  @Input() slidesPerPage!: number
  @Input() paginationPerSlide!: number
  timer: Timer
  currentIndex = 0
  slideWidth!: string
  carouselStyle!: { [key: string]: string }
  widthCarousel!: { width: string }

  ngOnInit(): void {
    const calculatedSlideWidth = 100 / this.slidesPerPage
    this.slideWidth = `${calculatedSlideWidth}%`
    this.updateCarouselStyle()

    this.widthCarousel = { width: `calc(100% / ${this.slidesPerPage})` }
    this.timer = window.setInterval(() => {
      this.nextSlide()
    }, GLOBAL_CONSTANTS.SLIDE_TIMEOUT)
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.updateCarouselStyle()
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.items.length - this.slidesPerPage) {
      this.currentIndex++
      this.updateCarouselStyle()
    } else {
      this.currentIndex = 0
    }
  }

  updateCarouselStyle(): void {
    const translateXValue = this.currentIndex * -parseInt(this.slideWidth, 10)
    this.carouselStyle = {
      transform: `translateX(${translateXValue}%)`
    }
  }
  ngOnDestroy(): void {
    window.clearInterval(this.timer)
  }
}

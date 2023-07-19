import { Component, Input, OnInit } from '@angular/core'
import { ITutor } from 'src/app/core/utilities/interfaces'

@Component({
  selector: 'app-tutor-carousel',
  templateUrl: './tutor-carousel.component.html',
  styleUrls: ['./tutor-carousel.component.scss']
})
export class TutorCarouselComponent implements OnInit {
  @Input() items!: ITutor[]
  @Input() slidesPerPage!: number
  @Input() paginationPerSlide!: number

  currentIndex = 0
  slideWidth!: string
  carouselStyle!: { [key: string]: string }
  widthCarousel!: { width: string }

  ngOnInit(): void {
    const calculatedSlideWidth = 100 / this.slidesPerPage
    this.slideWidth = `${calculatedSlideWidth}%`
    this.updateCarouselStyle()

    this.widthCarousel = { width: `calc(100% / ${this.slidesPerPage})` }
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
    }
  }

  updateCarouselStyle(): void {
    const translateXValue = this.currentIndex * -parseInt(this.slideWidth, 10)
    this.carouselStyle = {
      transform: `translateX(${translateXValue}%)`
    }
  }
}

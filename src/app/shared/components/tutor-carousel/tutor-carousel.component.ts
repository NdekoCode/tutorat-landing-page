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
  @Input() items: ITutor[] = []
  @Input() slidesPerPage!: number
  @Input() paginationPerSlide!: number
  timer: Timer
  currentIndex = 0
  slideWidth!: string
  carouselStyle!: { [key: string]: string }
  widthCarousel!: { width: string }
  containerWidth!: number | string
  ngOnInit(): void {
    this.setStyle()
    this.updateCarouselStyle()
    this.timer = window.setInterval(() => {
      this.nextSlide()
    }, GLOBAL_CONSTANTS.SLIDE_TIMEOUT)
  }
  setStyle() {
    // On definis une ratio qui va etre un peu la largeur en pourcentages des elements dans le carousel qui est le nombre d'item diviser par les nombre d'element que l'on veut afficher
    const ratio = this.items.length / this.slidesPerPage
    this.slideWidth = `${100 / this.slidesPerPage / ratio}%`
    this.updateCarouselStyle()
    this.widthCarousel = { width: `calc(100% / ${this.slidesPerPage / ratio})` }
    // On definis la largeur du `carousel__container`
    // On ajoute une largeur calculer avec "ratio"
    this.containerWidth = `calc(100% * ${
      (ratio * this.slidesPerPage) / ratio
    } )`
    // On parcour tous les elements dans notre `.carousel_container` pour leurs appliquer une largeur calculer
  }
  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.updateCarouselStyle()
    } else {
      this.updateCarouselStyle()
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.items.length - this.slidesPerPage) {
      this.currentIndex++
      this.updateCarouselStyle()
    } else {
      this.currentIndex = 0
      this.updateCarouselStyle()
    }
  }

  updateCarouselStyle(): void {
    const translateXValue = this.currentIndex * -parseInt(this.slideWidth, 10)
    this.carouselStyle = {
      transform: `translateX(${translateXValue}%)`,
      width: this.containerWidth as string
    }
  }
  ngOnDestroy(): void {
    window.clearInterval(this.timer)
  }
}

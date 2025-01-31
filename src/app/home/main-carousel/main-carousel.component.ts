import { Component } from '@angular/core';

@Component({
  selector: 'app-main-carousel',
  standalone: false,

  templateUrl: './main-carousel.component.html',
  styleUrl: './main-carousel.component.scss'
})
export class MainCarouselComponent {

  currentSlide: number = 0;

  getTranslateX(): string {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

}

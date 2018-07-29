import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { Film } from '../../../../../../models/film.model';
import { isPlatformBrowser } from '@angular/common';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'my-carusel-films',
  templateUrl: './carusel-films.component.html',
  styleUrls: ['./carusel-films.component.scss']
})
export class CaruselFilmsComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  carouselOne: NguCarousel
  @Input() films: Film[]
  @Input() title: string = ""
  @Input() grid = { xs: 2, sm: 3, md: 4, lg: 6, all: 0 }


  ngOnInit() {
    this.carouselOne = {
      grid: this.grid,
      slide: 1,
      speed: 1000,
      // interval: 1100,

      point: {
        visible: true
      },
      load: 5,
      touch: false,
      loop: true,
      custom: 'banner'
    }
  }

  carLoad(e) {

  }

}

import { Component, OnInit, ElementRef, ViewChild, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { Film } from '../../../../../../models/film.model';
import { FilmsService } from '../../../services/films.service';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'my-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],

})
export class PlayerComponent implements OnInit {

  constructor(
    private filmServ: FilmsService,
    private http: HttpClient,
    private render: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,

  ) { }
  film: Film
  @ViewChild("moon") moonPlayerEl: ElementRef;
  iFrame: HTMLIFrameElement

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener("resize", this.onResize.bind(this))
      this.onResize();

    }


    this.filmServ.film$.subscribe(s => {
      this.film = s.film

      if (isPlatformBrowser(this.platformId)) {
        this.addMoonPlayer();
        this.onResize();
      }
    })



  }

  notFoundCb() {
    let nf = `<div class="w-100 text-center small d-flex justify-content-center align-items-center">Видео не найденно.</div>`
    document.getElementById("visearch").innerHTML = nf;
  }

  onResize() {

    try {

      if (this.moonPlayerEl != undefined) {
        let height = Math.round(this.moonPlayerEl.nativeElement.scrollWidth / 1.77);
        this.render.setAttribute(this.moonPlayerEl.nativeElement, "style", "height:" + (height + 4) + 'px')
        if (this.iFrame) {
          this.render.setAttribute(this.iFrame, "style", "height:" + height + 'px')
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  FilmNotPublic() {
    let nf = `<div class="w-100 text-center small d-flex justify-content-center align-items-center">Видео удалено по требованию правообладателя.</div>`
    document.getElementById("visearch").innerHTML = nf;
  }

  async addMoonPlayer() {
    if (!this.film.isPublic) {
      this.FilmNotPublic()
      return
    }
    this.moonPlayerEl.nativeElement.innerHTML = ""
    let iframe_url = await this.filmServ.getIframeByFilmId(this.film._id).toPromise()
    if (!iframe_url) this.notFoundCb()

    this.iFrame = document.createElement("iframe")

    this.iFrame.src = iframe_url
    this.iFrame.width = "100%";
    this.iFrame.height = "100%"
    this.moonPlayerEl.nativeElement.appendChild(this.iFrame)


  }


}

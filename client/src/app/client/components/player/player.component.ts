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
  scriptEx: boolean = false

  ngOnInit() {
    this.filmServ.film$.subscribe(s => {
      this.film = s.film
    })

    if (isPlatformBrowser(this.platformId)) {
      this.onResize();
      window['moon_params'] = {
        width: "100%",
        height: this.moonPlayerEl.nativeElement.scrollWidth / 1.77,
        kp_id: this.film._id,
        not_found_callback: this.notFoundCb.bind(this)
      };
      window.onresize = this.onResize.bind(this)
      this.addMoonPlayer();
    }

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
        if (this.moonPlayerEl.nativeElement.children.length > 0) {
          this.render.setAttribute(this.moonPlayerEl.nativeElement.children[0], "style", "height:" + height + 'px')
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
  addMoonPlayer() {
    if (!this.film.isPublic) {
      this.FilmNotPublic()
      return
    }
    if (this.scriptEx) return
    !function (e, n, t, r, a) {
      r = e.createElement(n), a = e.getElementsByTagName(n)
      [0], r.async = !0, r.src = t, a.parentNode.insertBefore(r, a)
    }
      (document, "script", "//visearch.info/v2/find-player.min.js");
    this.scriptEx = true
  }


}

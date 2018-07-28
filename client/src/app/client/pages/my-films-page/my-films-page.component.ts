import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FilmsService } from '../../../services/films.service';
import { Film } from '../../../../../../models/film.model';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'my-my-films-page',
  templateUrl: './my-films-page.component.html',
  styleUrls: ['./my-films-page.component.scss']
})
export class MyFilmsPageComponent implements OnInit {

  constructor(
    private filmServ: FilmsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  films: Film[] = []
  message = ""
  async ngOnInit() {
    if (isPlatformServer(this.platformId)) return
    this.filmServ.myFilms$.next([])
    await this.filmServ.GetFilmsFromLocalStorage().toPromise();
    this.filmServ.myFilms$.subscribe(s => {
      this.films = s;
      if (s.length === 0) {
        this.message = "Нет сохраненных фильмов."
      } else {
        this.message = ""
      }
    })
  }

}

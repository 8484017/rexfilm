import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../../services/films.service';


import { ActivatedRoute, Router, NavigationEnd, ResolveEnd } from '@angular/router';
import { Films } from '../../../../../../models/films.model';
import { Title, Meta } from '@angular/platform-browser';
import { Subscriber, Subscription } from 'rxjs';


@Component({
  selector: 'my-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.scss'],

})
export class FilmsPageComponent implements OnInit {

  constructor(
    private filmsServ: FilmsService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) { }


  films: Films = new Films();
  subs: Subscription
  ngOnInit() {

    this.subs = this.filmsServ.films$.subscribe(s => {
      this.films = s
      this.title.setTitle(`RexFilm.ru - ${this.filmsServ.filter$.value.type}ы онлайн.`)
      this.meta.updateTag({ property: "description", content: `RexFilm.ru - подбор ${this.filmsServ.filter$.value.type}ов по критериям` })
      this.meta.updateTag({ property: "keywords", content: `навигатор по фильмам, поиск фильма, поиск сериала, критерии, жанры, рейтнг, популярные фильмы, топ` })

    })

  }

  async pageChanged(e) {

    this.filmsServ.setFilterPage(e)
    await this.filmsServ.getFilms().toPromise();
    window.scrollTo(0, 0)
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}

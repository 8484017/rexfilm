import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../../services/films.service';


import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Films } from '../../../../../../models/films.model';
import { Title, Meta } from '@angular/platform-browser';


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
  ngOnInit() {

    this.filmsServ.films$.subscribe(s => {
      this.films = s
      this.title.setTitle(`KinoFast.ru - ${this.filmsServ.filter$.value.type}ы онлайн.`)
      this.meta.updateTag({ property: "description", content: `KinoFast.ru - подбор ${this.filmsServ.filter$.value.type}ов по критериям` })

    })

  }

  pageChanged(e) {
    this.filmsServ.setFilterPage(e)
    this.filmsServ.getFilms().toPromise();
  }
}

import { Component, OnInit } from '@angular/core';
import { Film, FilmType } from '../../../../../../models/film.model';
import { FilmsService } from '../../../services/films.service';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'my-online-page',
  templateUrl: './online-page.component.html',
  styleUrls: ['./online-page.component.scss']
})
export class OnlinePageComponent implements OnInit {

  constructor(
    private filmsServ: FilmsService,
    private route: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) { }
  film: Film = new Film()
  ngOnInit() {
    this.filmsServ.film$.subscribe(s => {
      this.film = s
      this.title.setTitle(`${this.film.type.toLocaleUpperCase()} - ${this.film.name} (${this.film.year}) -  онлайн`)

      this.meta.updateTag({ property: "description", content: this.film.description.substring(0, 200).replace(/\s/g, ' ').trim() })

    })
  }

}
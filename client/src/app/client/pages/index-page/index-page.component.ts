import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../../services/films.service';
import { IndexFilms } from '../../../../../../models/films.model';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'my-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  constructor(
    private filmServ: FilmsService,
    private title: Title,
    private meta: Meta
  ) { }

  indexFilms: IndexFilms
  ngOnInit() {
    this.filmServ.indexFilms$.subscribe(s => this.indexFilms = s)
    this.title.setTitle("KinoFast.ru - фильмы и сериалы онлайн.")
    this.meta.updateTag({ property: "description", content: "KinoFast.ru - это большая коллекция кино, которой вам хватит надолго. Коллекция постоянно пополняется как новыми фильмами и сериалами, так и признанными шедеврами прошлых лет!" })
  }

}

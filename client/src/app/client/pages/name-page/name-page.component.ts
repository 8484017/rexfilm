import { Component, OnInit } from '@angular/core';
import { NameFilms } from '../../../../../../models/name.model';
import { FilmsService } from '../../../services/films.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'my-name-page',
  templateUrl: './name-page.component.html',
  styleUrls: ['./name-page.component.scss']
})
export class NamePageComponent implements OnInit {

  constructor(
    private filmServ: FilmsService,
    private title: Title,
    private meta: Meta

  ) { }
  nameFilms: NameFilms
  ngOnInit() {

    this.filmServ.filmsByName$.subscribe(s => {
      this.nameFilms = s
      this.title.setTitle(`${this.nameFilms.name.name} - фильмы онлайн`)
      this.meta.updateTag({ property: "description", content: `Фильмы и Сериалы с участием ${this.nameFilms.name.name} - ${this.nameFilms.name.alternateName}` })
    })

  }

}

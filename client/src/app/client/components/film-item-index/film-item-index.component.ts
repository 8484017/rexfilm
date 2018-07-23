import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../../../../../models/film.model';
var CyrillicToTranslit = require("cyrillic-to-translit-js");
@Component({
  selector: 'my-film-item-index',
  templateUrl: './film-item-index.component.html',
  styleUrls: ['./film-item-index.component.scss']
})
export class FilmItemIndexComponent implements OnInit {

  constructor() { }
  @Input() film: Film
  slug: string
  ngOnInit() {
    this.slug = CyrillicToTranslit().transform(this.film.name, "-").toLocaleLowerCase().replace(/[^0-9a-z-]/gi, '');
  }

}

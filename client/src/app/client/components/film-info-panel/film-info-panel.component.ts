import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../../../../../models/film.model';

@Component({
  selector: 'my-film-info-panel',
  templateUrl: './film-info-panel.component.html',
  styleUrls: ['./film-info-panel.component.scss']
})
export class FilmInfoPanelComponent implements OnInit {

  constructor() { }
  @Input() film: Film
  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../../../../../models/film.model';
import { FilmsService } from '../../../services/films.service';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'my-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

  constructor(
    private filmServ: FilmsService
  ) { }
  @Input() films: Film[]
  @Input() paginationEnabled = true
  pagination: PaginationInstance = { itemsPerPage: 1, totalItems: 1, currentPage: 1 }
  ngOnInit() {
    if (this.paginationEnabled) {
      this.filmServ.films$.subscribe(s => { this.pagination = s.pagination; this.pagination.id = "some_id" })
    }
  }

}

import { Component, OnInit, Optional, ViewChild, ElementRef, SimpleChange, SimpleChanges, ChangeDetectionStrategy, forwardRef, Inject, HostListener } from '@angular/core';
import { FilmsService } from '../../../services/films.service';



import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, skipLast, distinctUntilKeyChanged, skipWhile } from 'rxjs/operators';
import { Genres } from '../../../../../../models/film.model';
import { FilmFilter } from '../../../../../../models/films.model';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'my-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],


})
export class FilterComponent implements OnInit {

  constructor(
    private filmsServ: FilmsService,
    private route: ActivatedRoute,
    private router: Router

  ) { }
  genres = Genres
  filter: FilmFilter = new FilmFilter()
  allGenreCheck = true
  @ViewChild('form') from: FormGroup
  filterSubs: Subscription
  formSubs: Subscription

  ngOnInit() {

    this.filterSubs = this.filmsServ.filter$.subscribe(s => {
      this.filter = s
      this.allGenreCheck = this.filter.genre.length > 0 ? false : true
    })
    this.formSubs = this.from.valueChanges.pipe(debounceTime(1500), distinctUntilChanged(), skipLast(1)).subscribe(s => {
      this.filter.page = 1
      this.filmsServ.setFilter(this.filter)
      this.filmsServ.getFilms().toPromise()
    })
  }

  ClearGenre(e) {
    this.filter.genre = []
    setTimeout(() => {
      if (this.filter.genre.length === 0) {
        this.allGenreCheck = true
      }
    }, 0);
  }

  SetAllFalse(e) {
    setTimeout(() => {
      if (this.filter.genre.length > 0) {
        this.allGenreCheck = false
      } else {
        this.allGenreCheck = true
      }
    }, 0);
  }

  ngOnDestroy() {
    this.formSubs.unsubscribe();
    this.filterSubs.unsubscribe();
  }
}

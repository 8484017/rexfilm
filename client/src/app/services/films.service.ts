import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films, FilmFilter, IndexFilms } from '../../../../models/films.model';
import { Film, FilmType } from '../../../../models/film.model';
import { BehaviorSubject } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged, skipLast, catchError } from 'rxjs/operators';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NameFilms } from '../../../../models/name.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,

  ) {


  }


  indexFilms$ = new BehaviorSubject(new IndexFilms())
  films$ = new BehaviorSubject(new Films())
  filter$ = new BehaviorSubject(new FilmFilter())
  filmsByName$ = new BehaviorSubject(new NameFilms())
  film$ = new BehaviorSubject(new Film())

  public getFilms() {

    return this.http.post<Films>(`/api/films`, JSON.stringify(this.filter$.value), { headers: { "Content-Type": "application/json" } }).pipe(
      tap(s => {
        this.films$.next(s);
      }))
  }

  public getFilmById(id: string) {
    return this.http.get<Film>('/api/film/' + id).pipe(tap(s => {
      this.film$.next(s)
    }))
  }

  public getIndexFilms() {
    return this.http.get<IndexFilms>("/api/films/index").pipe(tap(
      s => this.indexFilms$.next(s),
      s => console.log(s)
    ))
  }

  public updateFilmsRand() {
    return this.http.get<Film[]>("/api/films/rand").pipe(tap(
      s => {
        let index = this.indexFilms$.value;
        index.randomFilms = s
        this.indexFilms$.next(index)
      }
    ))
  }

  public getNameAndFilms(nameId: string) {
    return this.http.get<NameFilms>('/api/films/byname/' + nameId).pipe(tap(s => {
      this.filmsByName$.next(s)
    }))
  }

  ///*Filter Control*///

  setFilter(filter: FilmFilter) {
    this.filter$.next(filter)
  }

  setFilterPage(page: number) {
    let nf = this.filter$.value
    nf.page = page
    this.filter$.next(nf)
  }

  setFilterType(type: string) {
    let newtype = type === "films" ? FilmType.film : FilmType.serial
    let nf = this.filter$.value
    nf.type = newtype
    this.filter$.next(nf)
  }
}

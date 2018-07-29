import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Film } from "../../../../models/film.model";
import { FilmsService } from "../services/films.service";
import { Injectable } from "@angular/core";
import { FilmView } from "../../../../models/film.view";

@Injectable()
export class FilmResolver implements Resolve<FilmView>{
    constructor(private filmsServ: FilmsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.filmsServ.getFilmById(route.params.id)
    }
}
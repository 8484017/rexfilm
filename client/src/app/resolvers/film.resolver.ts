import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Film } from "../../../../models/film.model";
import { FilmsService } from "../services/films.service";
import { Injectable } from "@angular/core";

@Injectable()
export class FilmResolver implements Resolve<Film>{
    constructor(private filmsServ: FilmsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.filmsServ.getFilmById(route.params.id)
    }
}
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import { Films } from "../../../../models/films.model";
import { FilmsService } from "../services/films.service";
import { Injectable } from "@angular/core";
import { FilmType } from "../../../../models/film.model";

@Injectable()
export class FilmsResolver implements Resolve<Films>{

    constructor(
        private filmsServ: FilmsService,

    ) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.filmsServ.setFilterType(route.params.type)
        return this.filmsServ.getFilms();
    }

} 
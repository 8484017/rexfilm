import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from "@angular/router";
import { Films, IndexFilms } from "../../../../models/films.model";
import { FilmsService } from "../services/films.service";
import { Injectable } from "@angular/core";
import { FilmType } from "../../../../models/film.model";

@Injectable()
export class IndexFilmsResolver implements Resolve<IndexFilms>{

    constructor(
        private filmsServ: FilmsService,

    ) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.filmsServ.getIndexFilms()
    }

} 
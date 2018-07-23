import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Film } from "../../../../models/film.model";
import { FilmsService } from "../services/films.service";
import { Injectable } from "@angular/core";
import { NameFilms } from "../../../../models/name.model";

@Injectable()
export class NameResolver implements Resolve<NameFilms>{
    constructor(private filmsServ: FilmsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.filmsServ.getNameAndFilms(route.params.id)
    }
}
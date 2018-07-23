import { Film } from "./film.model";

export class Name {
    _id: number = null
    name: string = null
    alternateName: string = null
    poster: string = null
    poster_thumb: string = null
}

export class NameFilms {
    name: Name
    films: Film[]
}
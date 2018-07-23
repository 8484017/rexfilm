import { Film, FilmType } from "./film.model";
import { PaginationInstance } from '../client/node_modules/ngx-pagination/';



export class Films {
    films: Film[] = []
    pagination: Pagination
}

export class IndexFilms {
    newFilms: Film[] = []
    newSerials: Film[] = []
    randomFilms: Film[] = []
    popularFilms: Film[] = []
    popularSerials: Film[] = []
}

export class Pagination implements PaginationInstance {

    itemsPerPage: number = 10
    currentPage: number = 1
    totalItems?: number


}

export class FilmFilter {
    genre: string[] = []
    page: number = 1
    sortBy: FilmsSortBy = FilmsSortBy.date
    type: FilmType = FilmType.film
}

export const enum FilmsSortBy {
    star = "kp",
    popular = "count",
    date = "timespan",
    year = "year"
}

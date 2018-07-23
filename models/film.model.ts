import { Name } from "./name.model";

export class Film {
    _id: number = null
    isPublic: boolean = false
    poster: string = null
    poster_thumb: string = null
    name: string = null
    alternateName: string = null
    description: string = null
    type: string = null
    year: number = null
    slogan: string = null
    counrty: string[] = []
    regisers: number[] | Name[] | any[] = []
    scenarists: number[] | Name[] | any[] = []
    produsers: number[] | Name[] | any[] = []
    operators: number[] | Name[] | any[] = []
    compositors: number[] | Name[] | any[] = []
    hudognik: number[] | Name[] | any[] = []
    montag: number[] | Name[] | any[] = []
    genre: string[] = []
    time: string = null
    kp: number = null

    timespan: number = Date.now()
    actors: number[] | Name[] | any[] = []
    features: string[] = []

    count: number = 0
}

export class FilmType {
    static film = "фильм"
    static serial = "сериал"
}


export const Genres = [

    'аниме',
    'биография',
    'боевик',
    'вестерн',
    'военный',
    'детектив',
    'детский',
    'драма',
    'история',
    'комедия',
    'криминал',
    'мелодрама',
    'музыка',
    'мультфильм',
    'мюзикл',
    'приключения',
    'семейный',
    'спорт',
    'триллер',
    'ужасы',
    'фантастика',
    'фэнтези'
]
import { actorsMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genre.model";
import { movieTheatersDTO } from "../movie-theaters/movie-theaters.models";

  export interface movieCreationDTO{
    title: string;
    summary: string;
    poster: File;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    genresIds: number[]; 
    movieTheatersIds: number[];
    actors: actorsMovieDTO[];
  }

  export interface movieDTO{
    id: number;
    title: string;
    summary: string;
    poster: string;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    genres: genreDTO[];
    movieTheater:  movieTheatersDTO[];
    actors: actorsMovieDTO[];
  }

  export interface MoviePostGetDTO{
     genres: genreDTO[];
     movieTheaters: movieTheatersDTO[];
  }

  export interface homeDTO{
    inTheaters: movieDTO[];
    upcomingReleases: movieDTO;
  }

  export interface MoviePutGetDTO{
    movie: movieDTO;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheatersDTO[];
    nonSelectedMovieTheaters: movieTheatersDTO[];
    actors: actorsMovieDTO[];
  }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void{

    this.moviesInTheaters = 
    [{
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 15.97,
      poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_QL75_UY148_CR0,0,100,148_.jpg'
    },
    {
    title: 'Gone With The Wind',
      releaseDate: new Date(),
      price: 29.97,
      poster: 'https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX100_CR0,3,100,148_.jpg'
    },
    {
    title: 'The Sound of Music',
      releaseDate: new Date(),
      price: 49.97,
      poster: 'https://m.media-amazon.com/images/M/MV5BODIxNjhkYjEtYzUyMi00YTNjLWE1YjktNjAyY2I2MWNkNmNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY148_CR2,0,100,148_.jpg'
    }]; 

    this.moviesFutureReleases = 

    [{
      title: 'Top Gun',
      releaseDate: new Date(),
      price: 49.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_QL75_UX100_CR0,4,100,148_.jpg'
    },
    {
    title: 'Back To The Future',
      releaseDate: new Date('2022-09-02'),
      price: 29.97,
      poster: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX100_CR0,4,100,148_.jpg'
    },
    {
    title: 'Edge of Tomorrow',
      releaseDate: new Date('2022-11-27'),
      price: 39.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_QL75_UX100_CR0,0,100,148_.jpg'
    }];

  }

moviesInTheaters;
moviesFutureReleases;

}

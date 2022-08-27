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
      poster: 'https://images.moviesanywhere.com/e45bfc010f1e0626b1ee9efbe2726e55/7e42ca11-be74-41b9-986c-3e5a8a431fe3.jpg?h=375&resize=fit&w=250'
    },
    {
    title: 'Gone With The Wind',
      releaseDate: new Date(),
      price: 29.97,
      poster: 'https://m.media-amazon.com/images/I/517PS80V2PL.jpg'
    },
    {
    title: 'The Sound of Music',
      releaseDate: new Date(),
      price: 49.97,
      poster: 'https://images-na.ssl-images-amazon.com/images/I/51CKXKE91PL.jpg'
    }]; 

    this.moviesFutureReleases = 

    [{
      title: 'Top Gun',
      releaseDate: new Date(),
      price: 49.99,
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBW6PQeLDOVZw7OQ9wVoS6uWzWJ2R1RGX5Q&usqp=CAU'
    },
    {
    title: 'Back To The Future',
      releaseDate: new Date('2022-09-02'),
      price: 29.97,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Back_to_the_Future.jpg/220px-Back_to_the_Future.jpg'
    },
    {
    title: 'Edge of Tomorrow',
      releaseDate: new Date('2022-11-27'),
      price: 39.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Edge_of_Tomorrow_Poster.jpg'
    }];

  }

moviesInTheaters;
moviesFutureReleases;

}

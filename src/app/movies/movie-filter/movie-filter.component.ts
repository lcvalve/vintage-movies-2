import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  genres = [{id: 1, name: 'Drama'}, {id: 2, name: 'Action'}, {id: 3, name: 'Comedy'}]

  movies = [
    {title: 'Spider-Man', poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_QL75_UY148_CR0,0,100,148_.jpg'},
    {title: 'Gone-With-The-Wind', poster: 'https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX100_CR0,3,100,148_.jpg'},
    {title: 'The-Sound-Of-Music', poster: 'https://m.media-amazon.com/images/M/MV5BODIxNjhkYjEtYzUyMi00YTNjLWE1YjktNjAyY2I2MWNkNmNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY148_CR2,0,100,148_.jpg'}

  ];

  originalMovies= this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false

    });

    this.form.valueChanges
      .subscribe(values => {
        this.movies = this.originalMovies;
        this.filterMovies(values);
      });
  }

  filterMovies(values: any){
    if(values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
  }

  cleanForm(){
      this.form.reset();
  }

}

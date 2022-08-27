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
    {title: 'Spider-Man', poster: 'https://images.moviesanywhere.com/e45bfc010f1e0626b1ee9efbe2726e55/7e42ca11-be74-41b9-986c-3e5a8a431fe3.jpg?h=375&resize=fit&w=250'},
    {title: 'Gone-With-The-Wind', poster: 'https://m.media-amazon.com/images/I/517PS80V2PL.jpg'},
    {title: 'The-Sound-Of-Music', poster: 'https://images-na.ssl-images-amazon.com/images/I/51CKXKE91PL.jpg'}

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

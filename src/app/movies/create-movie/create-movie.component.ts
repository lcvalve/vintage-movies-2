import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { movieCreationDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  constructor(private moviesService: MoviesService, private router: Router) { }

  nonSelectedGenres: multipleSelectorModel[];
  nonSelectedMovieTheaters: multipleSelectorModel[];

  ngOnInit(): void {
    this.moviesService.postGet().subscribe(Response => {
      this.nonSelectedGenres = Response.genres.map(genre => {
        return <multipleSelectorModel>{key: genre.id, value: genre.name}
      });

      this.nonSelectedMovieTheaters = Response.movieTheaters.map(movieTheater => {
        return <multipleSelectorModel>{key: movieTheater.id, value: movieTheater.name}
      });

    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO){
    console.log("component",movieCreationDTO);
    this.moviesService.create(movieCreationDTO).subscribe(id => {
      this.router.navigate(['/movie/' + id]);
    })
  }

}

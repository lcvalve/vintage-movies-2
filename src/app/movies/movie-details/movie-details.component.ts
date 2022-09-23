import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { coordinatesMapWithMessage } from 'src/app/utilities/map/coordinate';
import { movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) { }

  movie: movieDTO;
  releaseDate: Date;
  trailerURL: SafeResourceUrl;
  coordinates: coordinatesMapWithMessage[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log("params", params);
      this.moviesService.getById(params['id']).subscribe(movie =>{
        console.log("movie",movie);
        this.movie = movie;
        this.releaseDate = new Date(movie.releaseDate);
        this.trailerURL = this.generateYoutubeURLForEmbeddedVideo(movie.trailer);
        console.log("URL", this.trailerURL);
        this.coordinates = movie.movieTheater.map(movieTheater => {
          return {latitude: movieTheater.latitude, longitude: movieTheater.longitude,
          message: movieTheater.name}
        });
        console.log('cordinates', this.coordinates);
      })
    })
  }

  generateYoutubeURLForEmbeddedVideo(url: string): SafeResourceUrl{
    if(!url){
      return '';
    }

    let videoId = url.split('v=')[1];
    // const ampersandPosition = videoId.indexof('&');
    // if(ampersandPosition !== -1){
    //   videoId = videoId.substring(0, ampersandPosition);
    // }

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    // return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.models';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieTheatersDTO = {name: 'Perrinville', latitude: 47.830513755702945, longitude: -122.3366689682007};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramas => {
    });
  }

  saveChanges(movieTheater: movieTheatersCreationDTO){

  }

}

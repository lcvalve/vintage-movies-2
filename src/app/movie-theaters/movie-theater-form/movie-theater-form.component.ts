import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap } from 'src/app/utilities/map/coordinate';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.models';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css']
})
export class MovieTheaterFormComponent implements OnInit {

  constructor(private formBuider: FormBuilder) { }

  form: FormGroup

  @Output()
  onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();

  @Input()
  model: movieTheatersDTO;

  initialCoordinates: coordinatesMap[] =[];

  ngOnInit(): void {
    this.form = this.formBuider.group({
      name: ['', {
        validators: [Validators.required]
      }],
      longitude: ['', {
        validators: [Validators.required]
      }],
      latitude: ['', {
        validators: [Validators.required]
      }]
    })

    if(this.model !== undefined){
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude});
    }
  }

  OnSelectedLocation(coordinates: coordinatesMap){
      this.form.patchValue(coordinates);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}

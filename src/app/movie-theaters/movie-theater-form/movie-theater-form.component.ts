import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieTheatersCreationDTO } from '../movie-theaters.models';

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
  model: movieTheatersCreationDTO;

  ngOnInit(): void {
    this.form = this.formBuider.group({
      name: ['', {
        validators: [Validators.required]
      }]
    })

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}

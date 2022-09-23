import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genre.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

    @Input()
    model: genreCreationDTO;

    form: FormGroup;

    @Output()
    onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

    ngOnInit(): void {
      this.form = this.formBuilder.group({
        name: ['Drama', {
          validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()] 
        }]
      });

      if (this.model !== undefined){
        this.form.patchValue(this.model);
      }

    }
  
    SaveChanges(){
      this.onSaveChanges.emit(this.form.value);
    }
  
    getErrorMessageFieldName(){
       const field = this.form.get('name');
      
       if (field.hasError('required')){
        return 'The name field is required';
       }
  
       if(field.hasError('minlegth')){
        return 'The minimun length is 3';
       }
  
       if(field.hasError('firstLetterUppercase')){
          return field.getError('firstLetterUppercase').message;
       }
  
       return '';
    }

}

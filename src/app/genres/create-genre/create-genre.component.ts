import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genre.model';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  SaveChanges(genreCreationDTO: genreCreationDTO){
    // Will need to implement save the Genre here LCV...
    console.log(genreCreationDTO);
    this.router.navigate(['/genres']);

  }

}

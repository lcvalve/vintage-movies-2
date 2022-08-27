import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: actorDTO = {name: 'Tom Holland', dateOfBirth: new Date(), biography: 'default value',
                         picture: 'https://akns-images.eonline.com/eol_images/Entire_Site/20211114/rs_1200x1200-211214164226-1200-tom-holland.ct.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params['id']);

    });
  }

  saveChanges(actorCreationDTO: actorCreationDTO){
    console.log(actorCreationDTO);
  }

}

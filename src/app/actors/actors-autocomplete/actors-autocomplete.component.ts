import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor() { }
  control: FormControl = new FormControl(); 

  actors = [
    {name: 'Clark Gable', picture: 'https://m.media-amazon.com/images/M/MV5BMDE4YmViM2YtNDcyYi00OWEzLTkxY2MtMTM0OGJiNjQ4ZGRkXkEyXkFqcGdeQXVyMjUyMjUzMw@@._V1_QL75_UY148_CR24,0,100,148_.jpg'},
    {name: 'Tom Cruise', picture: 'https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UY148_CR5,0,100,148_.jpg'},
    {name: 'Tom Holland', picture: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_QL75_UX100_CR0,1,100,148_.jpg'},
    {name: 'Michael J Fox', picture: 'https://m.media-amazon.com/images/M/MV5BMTcwNzM0MjE4NF5BMl5BanBnXkFtZTcwMDkxMzEwMw@@._V1_QL75_UY148_CR1,0,100,148_.jpg'},
    {name: 'Julie Andrews', picture: 'https://m.media-amazon.com/images/M/MV5BMjExMTYyODA2Ml5BMl5BanBnXkFtZTYwMTgyMDA0._V1_QL75_UY148_CR1,0,100,148_.jpg'}
  ]

  selectedActors: any[] = [];

  originalActors = this.actors;

  columnsToDisplay = ['picture', 'name', 'character', 'actions']

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(actor => actor.name.indexOf(value) !== -1);
    })
  }

  optionSelected(event: MatOptionSelectionChange){
    const value = event.source.value.name;
    if(!this.selectedActors.includes(value)){
    this.selectedActors.push(event.source.value.name);
      this.table.renderRows();
    }
    console.log(event.source.value.name);
    // console.log(this.selectedActors);
    this.control.patchValue('');
  }

  remove(actor){
      const index = this.selectedActors.findIndex(a => a.name === actor.name);
      this.selectedActors.splice(index, 1);
      this.table.renderRows();
  }

  dropped(event: CdkDragDrop<any[]>){
    const prevIndex = this.selectedActors.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.selectedActors, prevIndex, event.currentIndex);
    this.table.renderRows();
  }

}

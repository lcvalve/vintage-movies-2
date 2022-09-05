import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatTable } from '@angular/material/table';

interface IActor{
  name: string;
  picture: string;
  character: string;
  actions: string;
}

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor() { }
  control: FormControl = new FormControl();

  actors: IActor[] = [
    { name: 'Clark Gable', picture: 'https://m.media-amazon.com/images/M/MV5BMDE4YmViM2YtNDcyYi00OWEzLTkxY2MtMTM0OGJiNjQ4ZGRkXkEyXkFqcGdeQXVyMjUyMjUzMw@@._V1_QL75_UY148_CR24,0,100,148_.jpg', character: '', actions: '' },
    { name: 'Tom Cruise', picture: 'https://m.media-amazon.com/images/M/MV5BYTFlOTdjMjgtNmY0ZC00MDgxLThjNmEtZGIxZTQyZDdkMTRjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UY148_CR5,0,100,148_.jpg', character: '', actions: '' },
    { name: 'Tom Holland', picture: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_QL75_UX100_CR0,1,100,148_.jpg', character: '', actions: '' },
    { name: 'Michael J Fox', picture: 'https://m.media-amazon.com/images/M/MV5BMTcwNzM0MjE4NF5BMl5BanBnXkFtZTcwMDkxMzEwMw@@._V1_QL75_UY148_CR1,0,100,148_.jpg', character: '', actions: '' },
    { name: 'Julie Andrews', picture: 'https://m.media-amazon.com/images/M/MV5BMjExMTYyODA2Ml5BMl5BanBnXkFtZTYwMTgyMDA0._V1_QL75_UY148_CR1,0,100,148_.jpg', character: '', actions: '' }
  ]

  selectedActors: IActor[] = [];

  originalActors = this.actors;

  columnsToDisplay = ['picture', 'name', 'character', 'actions']
  // columnsToDisplay = ['picture', 'name']

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    // this.control.valueChanges.subscribe(value => {
    //   this.actors = this.originalActors;
    //   // this.actors = this.actors.filter(actor => actor.name.indexOf(value) !== -1);
    // })
  }

  optionSelected(event: MatOptionSelectionChange) {
    const selectedValue = event.source.value as IActor;
    if (!this.selectedActors.find(a=>a.name === selectedValue.name)) {
      this.selectedActors.push(selectedValue);
      //filter options
      this.actors = this.actors.filter(a=>a.name !== selectedValue.name);
      console.log(selectedValue);
      
      console.log(this.table);
      this.table.renderRows();
    }
    // console.log(event.source.value.name);
    // console.log(this.selectedActors);
    this.control.patchValue('');
  }

  remove(actor: any) {
    const index = this.selectedActors.findIndex(a => a.name === actor.name);
    this.selectedActors.splice(index, 1);
    this.table.renderRows();
    // add to the options
    this.actors.push(actor);
  }

  dropped(event: CdkDragDrop<any[]>) {
    const prevIndex = this.selectedActors.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.selectedActors, prevIndex, event.currentIndex);
    this.table.renderRows();
    
  }

}

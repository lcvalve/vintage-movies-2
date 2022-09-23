import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { genreCreationDTO, genreDTO } from './genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private Http: HttpClient) { }

  private apiURL = environment.apiURL + '/genres'

  getAll(): Observable<genreDTO[]>{
    return this.Http.get<genreDTO[]>(this.apiURL);
  }

  getById(id: number): Observable<genreDTO>{
    var _apiURL = this.apiURL + "/" + id;
    return this.Http.get<genreDTO>(_apiURL);
  }

  create(genre: genreCreationDTO) {
     return this.Http.post(this.apiURL, genre);
  }

  edit(id: number, genre: genreCreationDTO){
    var _apiEditURL = this.apiURL + "/" + id;
    return this.Http.put(_apiEditURL, genre);
  } 

  delete(id: number){
    var _apiDeleteURL = this.apiURL + "/" + id;
    return this.Http.delete(_apiDeleteURL);
  }

}

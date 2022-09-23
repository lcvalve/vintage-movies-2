import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieTheatersCreationDTO, movieTheatersDTO } from './movie-theaters.models';

@Injectable({
  providedIn: 'root'
})
export class MovieTheatersService {

  constructor(private Http: HttpClient) { }

  private apiURL = environment.apiURL + '/movieTheaters';

  public get(): Observable<movieTheatersDTO[]>{
    return this.Http.get<movieTheatersDTO[]>(this.apiURL);
  }

  public getById(id: number): Observable<movieTheatersDTO>{
    return this.Http.get<movieTheatersDTO>(`${this.apiURL}/${id}`);
  }

  public create(movieTheaterDTO: movieTheatersCreationDTO){
    return this.Http.post(this.apiURL, movieTheaterDTO);
  }

  public edit(id: number, movieTheaterDTO: movieTheatersCreationDTO){
    return this.Http.put(`${this.apiURL}/${id}`, movieTheaterDTO);
  }

  public delete(id: number){
    return this.Http.delete(`${this.apiURL}/${id}`);
  }

}

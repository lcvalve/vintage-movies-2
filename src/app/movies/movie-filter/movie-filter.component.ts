import { Location } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { genreDTO } from 'src/app/genres/genre.model';
import { GenresService } from 'src/app/genres/genres.service';
import { movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private moviesService: MoviesService,
    private genresService: GenresService,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  form: FormGroup;

  genres: genreDTO[];

  movies: movieDTO[];
  currentPage = 1;
  recordsPerPage = 10;
  initialFormValues: any;
  totalAmountOfRecords;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false

    });

    this.initialFormValues = this.form.value;
    this.readPArametersFromURL();

    this.genresService.getAll().subscribe(genres => {
      this.genres = genres;

      this.filterMovies(this.form.value);

      this.form.valueChanges
        .subscribe(values => {
          this.filterMovies(values);
          this.WriteParametersInURL();
        });
    })

  }

  paginatorUpdate(event: PageEvent){
    this.currentPage = event.pageIndex + 1;
    this.recordsPerPage = event.pageSize;
    this.WriteParametersInURL();
    this.filterMovies(this.form.value);
  }

  filterMovies(values: any){
    values.page = this.currentPage;
    values.recordsPerPage = this.recordsPerPage;
    this.moviesService.filter(values).subscribe((response: HttpResponse<movieDTO[]>) => {
      this.movies = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
    })
  }

  private readPArametersFromURL(){
    this.activatedRoute.queryParams.subscribe(params => {
      var obj: any = {};

      if(params['title'])
      {
        obj.title = params['title'];
      }

      if(params['genreId'])
      {
        obj.genreId = Number(params['genreId']);
      }

      if(params['upcomingReleases'])
      {
        obj.upcomingReleases = params['upcomingReleases'];
      }

      if(params['inTheaters']){
        obj.inTheaters = params['inTheaters'];
      }

      if(params['page']){
        this.currentPage = params['page'];
      }

      if(params['recordsPerPage'])
      {
        this.recordsPerPage = params['recordsPerPage'];
      }

      this.form.patchValue(obj);

    })
  }

  private WriteParametersInURL(){
    const queryStrings =[];

    const formValues = this.form.value;

    if(formValues.tile){
      queryStrings.push(`title=${formValues.title}`);
    }

    if(formValues.genreId != '0'){
      queryStrings.push(`genreId=${formValues.genreId}`);
    }

    if(formValues.upcomingReleases){
      queryStrings.push(`upcomingReleases=${formValues.upcomingReleases}`);
    }

    if(formValues.inTheaters){
      queryStrings.push(`inTheaters=${formValues.inTheaters}`);
    }
    
    queryStrings.push(`page=${this.currentPage}`);

    queryStrings.push(`recordsPerPage=${this.recordsPerPage}`);

    this.location.replaceState('movies/filter', queryStrings.join('&'));

  }

  cleanForm(){
      this.form.patchValue(this.initialFormValues);
  }

  onDelete(){
    this.filterMovies(this.form.value);
  }

}

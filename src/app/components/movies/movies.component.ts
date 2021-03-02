import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../service/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [ContentfulService]
})
export class MoviesComponent implements OnInit {
  movies: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getMovies()
    .then(movies => {
      this.movies = movies
    })
  }
  sortMovies(sortBy: string){
    if (sortBy === 'mins') {
      this.movies.sort((a, b) => parseFloat(a.fields.mins) - parseFloat(b.fields.mins));
    }
    if (sortBy === 'year') {
      this.movies.sort((a, b) => parseFloat(a.fields.year) - parseFloat(b.fields.year));
    }
    if (sortBy === 'title') {
      this.movies.sort(function(a: any, b: any){
        if(a.fields.title < b.fields.title) { return -1; }
        if(a.fields.title > b.fields.title) { return 1; }
        return 0;
      })
    }
  }
}

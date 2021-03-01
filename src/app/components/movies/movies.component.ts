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
}

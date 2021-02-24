import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent implements OnInit {
  public movies: Entry<any>[] = [];
  public singleMovies: Entry<any>[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService) { }


  ngOnInit(): void {
    const singleMoviesID = this.route.snapshot.paramMap.get('id');
    console.log(singleMoviesID);
    this.contentfulService.getMovies()
      .then((movies) => {
        this.movies = movies;
        console.log(this.movies);
      });
  }

}

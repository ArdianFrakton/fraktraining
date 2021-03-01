import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../service/contentful.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  allMovies: any;
  movies: any;
  movie: any;
  private slug: any;

  constructor(
    private route: ActivatedRoute,
    private ContentfulService: ContentfulService,
  ) {
    this.movie = {};
    this.slug = this.route.snapshot.paramMap.get('slug');;
  }

  ngOnInit() {
    this.ContentfulService.getMovies()
    .then(movies => {
      const filteredMovie = movies.filter((el) => {
        return el.fields.slug === this.slug;
      });
      const filteredArray = movies.filter((item) => {
        return item.fields.slug !== this.slug;
      });
      this.allMovies = movies;
      this.movie = filteredMovie[0];
      this.movies = filteredArray;
    })
  }
  movieDetail(movieSlug: string){
    this.slug = movieSlug;
    const filteredMovie = this.allMovies.filter((element: any) => {
      return element.fields.slug === movieSlug;
    });
    const filteredArray = this.allMovies.filter((item: any) => {
      return item.fields.slug !== movieSlug;
    });
    this.movie = filteredMovie[0];
    this.movies = filteredArray;
  }
}

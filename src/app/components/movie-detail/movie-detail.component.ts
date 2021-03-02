import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../service/contentful.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ContentfulService: ContentfulService,
  ) {
    this.movie = {};
    this.slug = this.route.snapshot.paramMap.get('slug');;
  }

  ngOnInit() {
    this.ContentfulService.getMovies()
    .then(movies => {
      const filteredMovie = movies.find((el) => el.fields.slug === this.slug);
      const filteredArray = movies.filter((item) => item.fields.slug !== this.slug);
      this.allMovies = movies;
      this.movie = filteredMovie;
      this.movies = filteredArray;
    })
  }
  movieDetail(movieSlug: string){
    this.slug = movieSlug;
    this.router.navigate(['/movies', movieSlug]);
    const filteredMovie = this.allMovies.find((element: any) => element.fields.slug === this.slug);
    const filteredArray = this.allMovies.filter((item: any) => item.fields.slug !== movieSlug);
    this.movie = filteredMovie;
    this.movies = filteredArray;
  }
}

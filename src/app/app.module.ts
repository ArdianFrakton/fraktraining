import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieSingleComponent } from './movie-single/movie-single.component';
import { ContentfulService } from './contentful.service';

import { RouterModule, Routes }   from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies/:id', component: MovieSingleComponent },
  { path: 'movies',  component: MoviesComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

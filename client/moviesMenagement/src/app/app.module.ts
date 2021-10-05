import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AllMoviesComponent } from './COMPONENTS/all-movies/all-movies.component';
import { MovieComponent } from './COMPONENTS/movie/movie.component';
import { EditMovieComponent } from './COMPONENTS/edit-movie/edit-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AllMoviesComponent,
    MovieComponent,
    EditMovieComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

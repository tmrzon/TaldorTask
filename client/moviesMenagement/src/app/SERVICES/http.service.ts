import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../CLASSES/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<Movie[]>{
    return this.httpClient.get<Movie[]>('http://localhost:3000/api/movies')
  }
  newMovie(movie:Movie):Observable<any>{
    return this.httpClient.post('http://localhost:3000/api/movie',movie)
  }
  deleteMovie(movieName:string):Observable<any>{
    return this.httpClient.delete('http://localhost:3000/api/movie/'+movieName)
  }
  checkUrl(url:string):Observable<any>{
    return this.httpClient.head(url)
  }
}

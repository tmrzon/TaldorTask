import { Injectable } from '@angular/core';
import { Movie } from '../CLASSES/movie';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  userName=''
  movies:Movie[]=[]
  categories:Array<string>=[]
  password=''
  constructor() { }
}

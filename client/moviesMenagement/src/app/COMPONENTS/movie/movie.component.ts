import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/CLASSES/movie';
import { DbService } from 'src/app/SERVICES/db.service';
import { HttpService } from 'src/app/SERVICES/http.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
subscription:Subscription=new Subscription()
  @Input()movie=new Movie()
  constructor(private httpSer:HttpService,private dbSer:DbService) { }
delete(){
this.subscription=this.httpSer.deleteMovie(this.movie.movieName).subscribe(m=>{
  const index=this.dbSer.movies.findIndex(m=>m.movieName==this.movie.movieName)
  this.dbSer.movies.splice(index,1)
})
}
openLink(url:string){
  window.open(url,'_blank')
}
  ngOnInit(): void {
  }

}

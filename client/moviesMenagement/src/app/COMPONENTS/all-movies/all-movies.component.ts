import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/CLASSES/movie';
import { DbService } from 'src/app/SERVICES/db.service';
import { HttpService } from 'src/app/SERVICES/http.service';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

subscription:Subscription=new Subscription()
  constructor(private httpSer:HttpService,public dbSer:DbService,private modalService: NgbModal,public router:Router) { }
  ngOnInit(): void {
this.subscription.add(this.httpSer.getMovies().subscribe(movies=>{
  this.dbSer.movies=movies
  movies.forEach(m=>{
    if(!this.dbSer.categories.find(c=>c==m.movieName))
    this.dbSer.categories.push(m.movieName)
  })
},e=>{console.log(e)}))
  }
  openModal() {
    const modalRef = this.modalService.open(EditMovieComponent);
  }
  exit(){
    this.router.navigateByUrl('/login')
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}

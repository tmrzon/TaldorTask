import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { Movie } from 'src/app/CLASSES/movie';
import { DbService } from 'src/app/SERVICES/db.service';
import { HttpService } from 'src/app/SERVICES/http.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movieForm=new FormGroup({
    movieName:new FormControl('',[Validators.required,Validators.maxLength(30),Validators.pattern(/^[a-zA-Z\s]*$/),validateExistance(this.dbSer.movies)],[]),
    imdb:new FormControl('',[Validators.required,Validators.pattern('http://(?:www\.)?imdb.com/title/tt[^/]+/')]),
    poster:new FormControl('',[Validators.required,validateImdbOrJpg()]),
    category:new FormControl('',[Validators.required])
})
isSubmitted=false
subscription:Subscription=new Subscription()
  constructor(public activeModal: NgbActiveModal,private dbSer:DbService,private httpSer:HttpService) { }

  ngOnInit(): void {
  }
  addMovie(){
    this.isSubmitted=true
    if(this.movieForm.valid)
    this.subscription.add(this.httpSer.newMovie(this.movieForm.value).subscribe(m=>{
      this.dbSer.movies.push(this.movieForm.value)
      if(!this.dbSer.categories.find(c=>c==this.movieForm.value.category))
      this.dbSer.categories.push(this.movieForm.value.category)
        this.activeModal.close()
    },e=>{console.log(e)}))
  }
  validateUrl(key:string){
    this.subscription.add(this.httpSer.checkUrl(this.movieForm.controls[key].value).subscribe(d=>{
    },e=>{
      this.movieForm.controls[key].setErrors({urlNotExist:true})
    }))
  }
ngOnDestroy(){
  this.subscription.unsubscribe()
}
}
export function validateImdbOrJpg():ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    
    if(control.value.match('http://(?:www\.)?imdb.com/title/tt[^/]+/')||control.value.match(/^.*\.(jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$/))
    return null
    else
    return {error:'not Imdb or image'}
  };
}
export function validateExistance(movies:Movie[]):ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    
    let movie=movies.find(m=>m.movieName==control.value)
    return movie?{exist:true}:null
  };
}


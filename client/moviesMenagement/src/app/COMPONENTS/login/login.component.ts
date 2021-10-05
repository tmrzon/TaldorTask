import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from 'src/app/SERVICES/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private dbSer:DbService) { }
  userForm=new FormGroup({
      userName:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required])
  })
  formValid=true
  ngOnInit(): void {
  }
  signIn(){
    this.dbSer.userName=this.userForm.controls.userName.value
    this.dbSer.password=this.userForm.controls.password.value
    if(this.userForm.valid)
this.router.navigateByUrl('/secure')
else
this.formValid=false
  }

}

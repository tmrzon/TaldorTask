import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './COMPONENTS/all-movies/all-movies.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { UserGuard } from './GUARDS/user.guard';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'secure',component:AllMoviesComponent,canActivate:[UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

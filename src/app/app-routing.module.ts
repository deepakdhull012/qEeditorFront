import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: UsersComponent
  },
  {
    path: 'questions',
    loadChildren: './questions/questions.module#QuestionsModule',
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'questions',
    pathMatch: 'full'
  }
  ,{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
